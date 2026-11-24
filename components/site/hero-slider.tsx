'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroSlide {
  src: string
  alt: string
  caption: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/images/child.jpeg',
    alt: 'Young learner smiling in Iganga community',
    caption: 'Every child deserves a strong start'
  },
  {
    src: '/images/gal.jpeg',
    alt: 'Young girl engaged in community learning',
    caption: 'Empowering girls through education'
  },
  {
    src: '/images/girl.jpeg',
    alt: 'Student focused on her educational journey',
    caption: 'Building confidence and opportunity'
  },
  {
    src: '/images/xdren (2).jpeg',
    alt: 'Children learning and growing together',
    caption: 'Community-led support for families'
  },
  {
    src: '/images/youth.jpeg',
    alt: 'Youth developing practical life and leadership skills',
    caption: 'Equipping youth for lasting self-reliance'
  }
]

interface HeroSliderProps {
  eyebrow: string
  headline: readonly [string, string, string] | string[]
  description: string
}

export function HeroSlider({ eyebrow, headline, description }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [isPaused])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Community highlights"
    >
      <div className="hero-slides" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={slide.src}
              className={`hero-slide${isActive ? ' is-active' : ''}`}
            >
              <Image
                className="hero-image"
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          )
        })}
      </div>

      <div className="hero-shade" />

      <div className="container hero-content">
        <p className="hero-kicker">
          <span /> {eyebrow}
        </p>

        <h1>
          {headline[0]}
          <br />
          <em>{headline[1]}</em>
          <br />
          {headline[2]}
        </h1>

        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          <Link className="button button-accent fx-button" href="/donate">
            Support our work <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link className="button button-ghost fx-button" href="/about">
            Discover our story <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-bottom">
          <div className="hero-controls">
            <div className="hero-dots" role="tablist" aria-label="Select hero slide">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Slide ${index + 1}: ${slide.caption}`}
                  className={`hero-dot${index === currentIndex ? ' is-active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="hero-dot-fill" />
                </button>
              ))}
            </div>

            <div className="hero-arrows">
              <button
                type="button"
                onClick={goToPrev}
                className="hero-arrow-btn"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>
              <span className="hero-counter">
                0{currentIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <button
                type="button"
                onClick={goToNext}
                className="hero-arrow-btn"
                aria-label="Next slide"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <a href="#our-work" className="hero-scroll-link">
            Explore our work <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-side-note" aria-hidden="true">
        COMMUNITY · EDUCATION · POSSIBILITY
      </div>
    </section>
  )
}