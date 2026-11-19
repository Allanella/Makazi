'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { organization } from '@/data/organization'
import { navigation } from '@/data/navigation'

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link
            className="brand brand-light"
            href="/"
            aria-label="Makazi Education Initiative home"
          >
            <div className="brand-logo-wrap footer-logo-wrap">
              <Image
                src="/images/logoM.PNG"
                alt="Makazi Education Initiative logo"
                width={48}
                height={48}
                className="brand-logo"
              />
            </div>
            <span className="brand-copy">
              <strong>MAKAZI</strong>
              <small>EDUCATION INITIATIVE</small>
            </span>
          </Link>

          <p className="footer-mission">
            Creating opportunity through education, health, practical skills and stronger families.
          </p>

          <Link className="footer-cta" href="/get-involved">
            <span>Be part of the change</span>
            <ArrowUpRight className="cta-arrow" size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.slice(1, 5).map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                <span>{item.label}</span>
              </Link>
            ))}
            <Link href="/get-involved" className="footer-link">
              <span>Get involved</span>
            </Link>
            <Link href="/donate" className="footer-link">
              <span>Support our work</span>
            </Link>
          </nav>
        </div>

        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={17} className="contact-icon" aria-hidden="true" />
              <p>
                {organization.location}
                {organization.postalAddress && (
                  <>
                    <br />
                    <span className="postal-address">{organization.postalAddress}</span>
                  </>
                )}
              </p>
            </div>

            <a href={`mailto:${organization.email}`} className="footer-contact-link">
              <Mail size={17} className="contact-icon" aria-hidden="true" />
              <span>{organization.email}</span>
            </a>

            <a href={`tel:${organization.phoneHref}`} className="footer-contact-link">
              <Phone size={17} className="contact-icon" aria-hidden="true" />
              <span>{organization.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {organization.name}. All rights reserved.
        </span>

        <div className="footer-bottom-right">
          <span className="footer-tagline">Rooted in community. Focused on possibility.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}