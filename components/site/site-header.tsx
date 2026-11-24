'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { organization } from '@/data/organization'
import { navigation } from '@/data/navigation'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const renderNavLinks = (keyPrefix: string) =>
    navigation.map((item) => {
      const isActive =
        item.href === '/'
          ? pathname === '/'
          : pathname?.startsWith(item.href)

      return (
        <Link
          key={`${keyPrefix}-${item.href}`}
          href={item.href}
          className={`nav-link${isActive ? ' is-active' : ''}`}
          aria-current={isActive ? 'page' : undefined}
          onClick={() => setOpen(false)}
          tabIndex={keyPrefix === 'mobile' && !open ? -1 : undefined}
        >
          {item.label}
        </Link>
      )
    })

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-location">
            <MapPin size={14} aria-hidden="true" />
            {organization.location}
          </span>
          <div className="topbar-links">
            <a href={`tel:${organization.phoneHref}`}>
              <Phone size={13} aria-hidden="true" />
              <span>{organization.phone}</span>
            </a>
            <a href={`mailto:${organization.email}`}>
              <Mail size={13} aria-hidden="true" />
              <span>{organization.email}</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}`}
      >
        <div className="container nav-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Makazi Education Initiative home"
            onClick={() => setOpen(false)}
          >
            <div className="brand-logo-wrap">
              <Image
                src="/images/logoM.PNG"
                alt="Makazi Education Initiative logo"
                width={46}
                height={46}
                priority
                className="brand-logo"
              />
            </div>
            <span className="brand-copy">
              <strong>MAKAZI</strong>
              <small>EDUCATION INITIATIVE</small>
            </span>
          </Link>

          <nav className="main-nav main-nav-desktop" aria-label="Main navigation">
            {renderNavLinks('desktop')}
          </nav>

          <div className="nav-actions">
            <Link className="nav-support desktop-support" href="/donate">
              <span>Support our work</span>
              <ArrowUpRight className="support-arrow" size={17} aria-hidden="true" />
            </Link>

            <button
              className="menu-toggle"
              type="button"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer + backdrop sit outside sticky header so fixed positioning isn't trapped */}
      <nav
        id="mobile-navigation"
        className={`main-nav main-nav-mobile${open ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav-panel">
          <p className="mobile-nav-label">Explore</p>
          {renderNavLinks('mobile')}
          <Link
            className="nav-support mobile-support"
            href="/donate"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Support our work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </nav>

      {open && (
        <div
          className="nav-backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
