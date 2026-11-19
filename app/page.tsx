import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, HeartPulse, Sparkles, Sprout, UsersRound } from 'lucide-react'
import { organization } from '@/data/organization'
import { programs } from '@/data/programs'
import { newsArticles } from '@/data/news'
import { siteSettings } from '@/data/site-settings'
import { SectionHeading } from '@/components/site/section-heading'
import { HeroSlider } from '@/components/site/hero-slider'
import { NewsletterForm } from '@/components/forms/inquiry-form'

const focusIcons = [BookOpen, HeartPulse, Sprout, UsersRound]

const marqueeWords = ['Education', 'Well-being', 'Self-reliance', 'Community', 'Opportunity', 'Dignity', 'Hope', 'Together']

export default function HomePage() {
  const homepageContent = siteSettings.homepage

  return (
    <main id="main-content" className="fx-home">
      <HeroSlider
        eyebrow={homepageContent.heroEyebrow}
        headline={homepageContent.heroHeadline}
        description={homepageContent.heroDescription}
      />

      <section className="impact-strip fx-impact-strip" aria-label="Current impact">
        <div className="container impact-strip-inner">
          <div className="impact-number">
            <strong className="fx-count">
              <span className="fx-sr">28</span>
            </strong>
            <span>children currently supported</span>
          </div>
          <div className="impact-divider" />
          <div className="impact-location">
            <span className="impact-dot fx-pulse" />
            <p>
              Working alongside <strong>rural communities in Iganga</strong>
            </p>
          </div>
          <Link className="text-link" href="/impact">
            Explore our impact <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="fx-marquee" aria-hidden="true">
        <div className="fx-marquee-track">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={`${word}-${i}`}>
              {word}
              <Sparkles className="fx-marquee-icon" />
            </span>
          ))}
        </div>
      </div>

      <section className="section section-about fx-section" id="our-work">
        <span className="fx-blob fx-blob-a" aria-hidden="true" />
        <div className="container about-grid">
          <div className="about-visual fx-about-visual fx-reveal fx-left">
            <div className="about-photo fx-photo-frame">
              <Image
                src="/images/learning-materials.png"
                alt="Notebooks and school materials ready for learning"
                fill
                sizes="(max-width: 720px) 100vw, 45vw"
              />
            </div>
            <div className="about-caption fx-float">
              <span className="caption-mark">M</span>
              <p>
                Community-led.
                <br />
                <strong>Future-focused.</strong>
              </p>
            </div>
            <span className="photo-index">01 / 04</span>
          </div>
          <div className="about-copy fx-reveal fx-right">
            <p className="eyebrow">
              <span /> Who we are
            </p>
            <h2>
              Every person deserves the chance to <em className="fx-underline">thrive.</em>
            </h2>
            <p>
              MAKAZI Education Initiative is a community-focused organization in Iganga Municipality, Uganda. We partner with local stakeholders to expand opportunity and strengthen families through practical, lasting support.
            </p>
            <p>{homepageContent.aboutDescription}</p>
            <Link className="text-link" href="/about">
              Learn about MAKAZI <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-focus fx-section">
        <div className="container">
          <div className="section-topline fx-reveal">
            <SectionHeading
              eyebrow="How we work"
              title="Opportunity starts close to home."
              description="We work with families and communities to open pathways to well-being, learning and self-reliance."
            />
            <Link className="text-link section-side-link" href="/programs">
              View all programs <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="focus-grid">
            {programs.map((program, index) => {
              const Icon = focusIcons[index]
              return (
                <Link
                  className="focus-card fx-card fx-reveal fx-zoom-in"
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                >
                  <span className="focus-number">{program.number}</span>
                  <span className="focus-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{program.title}</h3>
                  <p>{program.shortDescription}</p>
                  <span className="focus-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-impact-feature fx-section">
        <div className="container impact-feature-grid">
          <div className="impact-feature-copy fx-reveal fx-left">
            <p className="eyebrow eyebrow-light">
              <span /> A meaningful beginning
            </p>
            <h2>
              {homepageContent.impactHeadline[0]}
              <br />
              <em>{homepageContent.impactHeadline[1]}</em>
            </h2>
            <p>{homepageContent.impactDescription}</p>
            <Link className="button button-accent fx-button" href="/impact">
              See our impact <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="impact-feature-photo fx-photo-frame fx-reveal fx-zoom-in">
            <Image
              src="/images/education-classroom.png"
              alt="Children learning in a classroom, representative imagery"
              fill
              sizes="(max-width: 720px) 100vw, 50vw"
            />
            <span>Education opens doors to possibility.</span>
          </div>
          <div className="impact-feature-stat fx-float">
            <strong className="fx-count">
              <span className="fx-sr">28</span>
            </strong>
            <span>children currently supported</span>
            <small>Rural communities in Iganga</small>
          </div>
        </div>
      </section>

      <section className="section section-values fx-section">
        <div className="container values-layout">
          <div className="fx-reveal fx-left">
            <SectionHeading
              eyebrow="What guides us"
              title="Values that shape our work."
              description="The way we work matters as much as what we do."
            />
            <Link className="text-link" href="/about#values">
              Read about our values <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="values-grid">
            {organization.values.map((value, index) => (
              <article className="value-card fx-card fx-reveal" key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mission fx-section">
        <div className="container mission-grid">
          <div className="mission-quote fx-reveal fx-left">
            <span className="quote-mark">“</span>
            <p>
              When families and communities have access to opportunity, everyone can take part in building a better future.
            </p>
            <span className="quote-rule" />
          </div>
          <div className="mission-copy fx-reveal fx-right">
            <p className="eyebrow">
              <span /> Our purpose
            </p>
            <h2>
              Stronger families.
              <br />
              <em>Thriving communities.</em>
            </h2>
            <div className="mission-items">
              <article className="fx-card">
                <span>01</span>
                <div>
                  <h3>Our mission</h3>
                  <p>{organization.mission}</p>
                </div>
              </article>
              <article className="fx-card">
                <span>02</span>
                <div>
                  <h3>Our vision</h3>
                  <p>{organization.vision}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gallery-preview fx-section">
        <div className="container">
          <div className="section-topline fx-reveal">
            <SectionHeading
              eyebrow="A closer look"
              title="The everyday moments matter."
              description="A glimpse of learning and community life, represented with privacy-conscious imagery."
            />
            <Link className="text-link section-side-link" href="/gallery">
              Visit the gallery <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="preview-gallery">
            <Link href="/gallery" className="preview-image preview-image-large fx-zoom fx-reveal fx-zoom-in">
              <Image
                src="/images/education-classroom.png"
                alt="Children learning together in a classroom"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </Link>
            <Link href="/gallery" className="preview-image fx-zoom fx-reveal fx-zoom-in">
              <Image
                src="/images/community-learning.png"
                alt="A community learning conversation"
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
              />
            </Link>
            <Link href="/gallery" className="preview-image fx-zoom fx-reveal fx-zoom-in">
              <Image
                src="/images/learning-materials.png"
                alt="School books and learning materials"
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-news fx-section">
        <div className="container news-feature-row">
          <div className="fx-reveal fx-left">
            <p className="eyebrow">
              <span /> From the community
            </p>
            <h2>
              Stories of learning,
              <br />
              <em>care and possibility.</em>
            </h2>
            <p>
              We share verified updates as they become available. For current information about MAKAZI&apos;s work, reach out to our team.
            </p>
            <Link className="text-link" href="/news">
              News & updates <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          {newsArticles.length ? (
            <div className="news-preview fx-card fx-reveal fx-right">
              <span>{newsArticles[0].category}</span>
              <h3>{newsArticles[0].title}</h3>
              <p>{newsArticles[0].excerpt}</p>
              <Link className="text-link" href={`/news/${newsArticles[0].slug}`}>
                Read story <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <div className="news-coming fx-card fx-reveal fx-right">
              <span>UPDATES</span>
              <strong>Stories are being prepared.</strong>
              <p>Only confirmed news and consented stories will be shared here.</p>
              <Link href="/contact">
                Contact us <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="cta-band fx-cta">
        <span className="fx-blob fx-blob-b" aria-hidden="true" />
        <span className="fx-blob fx-blob-c" aria-hidden="true" />
        <div className="container cta-band-inner">
          <div className="fx-reveal fx-left">
            <p className="eyebrow eyebrow-light">
              <span /> Together, we can do more
            </p>
            <h2>Be part of the possibility.</h2>
            <p>
              Whether you volunteer, partner with us or support a child&apos;s education, your interest can help move this work forward.
            </p>
          </div>
          <div className="cta-actions fx-reveal fx-right">
            <Link className="button button-accent fx-button" href="/get-involved">
              Get involved <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="button button-ghost fx-button" href="/donate">
              Support our work <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="newsletter-section fx-section">
        <div className="container newsletter-inner">
          <div className="fx-reveal fx-left">
            <p className="eyebrow">
              <span /> Stay connected
            </p>
            <h2>{homepageContent.newsletterHeading}</h2>
          </div>
          <div className="newsletter-content fx-reveal fx-right">
            <p>{homepageContent.newsletterDescription}</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  )
}