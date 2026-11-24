import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { GalleryGrid } from '@/components/site/gallery-grid'
import { organization } from '@/data/organization'
import { siteSettings } from '@/data/site-settings'
import { impactStories } from '@/data/impact-stories'
import { downloadableResources } from '@/data/resources'

export const metadata = {
  title: 'Our impact',
  description:
    'Learn about MAKAZI Education Initiative’s current support for 28 children in rural Iganga communities.',
}

export default function ImpactPage() {
  return (
    <main id="main-content" className="fx-page fx-home">
      <PageIntro
        eyebrow="Our impact"
        title="Every opportunity can open a door."
        description="Our work starts with the people and families who make community progress possible. Here is what MAKAZI is focused on today."
        image="/images/education-classroom.png"
        imageAlt="A classroom learning scene, representative imagery"
      />

      <section className="section fx-section">
        <div className="container">
          <div className="impact-highlight fx-reveal fx-zoom-in">
            <div className="impact-highlight-number">
              <span>Currently supported</span>
              <strong>{organization.impact.childrenSupported}</strong>
              <small>children from rural communities in Iganga</small>
            </div>
            <div className="impact-highlight-copy">
              <p className="eyebrow">
                <span /> A clear starting point
              </p>
              <h2>Supporting children to learn, grow and thrive.</h2>
              <p>
                MAKAZI currently supports 28 children from rural communities in Iganga. We share this
                figure as a present-tense snapshot—not as a claim about additional outcomes or
                services.
              </p>
              <Link className="text-link" href="/programs/education">
                Learn about education support <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft fx-section">
        <div className="container">
          <div className="fx-reveal">
            <SectionHeading
              eyebrow="Community stories"
              title="People first. Privacy always."
              description="Personal stories and identifiable photos will only be published with appropriate consent. Verified stories will appear here as they are ready to share."
            />
          </div>
          {impactStories.length ? (
            <div className="impact-stories-grid">
              {impactStories.map((story) => (
                <article className="impact-story-card fx-card fx-reveal" key={story.slug}>
                  <Image src={story.image} alt={story.imageAlt} width={720} height={480} />
                  <span>{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="story-empty fx-reveal">
              <ShieldCheck aria-hidden="true" />
              <div>
                <h3>Stories will be shared with care.</h3>
                <p>
                  We do not publish invented testimonials, names or personal details. Contact MAKAZI
                  for current information about its work.
                </p>
              </div>
              <Link className="text-link" href="/contact">
                Ask us directly <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section fx-section">
        <div className="container">
          <div className="section-topline fx-reveal">
            <SectionHeading
              eyebrow="Photo gallery"
              title="A glimpse of learning and community life."
              description="These representative visuals do not document a specific MAKAZI activity or identify a child."
            />
          </div>
          <GalleryGrid />
        </div>
      </section>

      <section className="section impact-reports fx-section">
        <div className="container reports-row">
          <div className="fx-reveal fx-left">
            <p className="eyebrow">
              <span /> Reports & resources
            </p>
            <h2>Accountability belongs to everyone.</h2>
            <p>
              Approved reports and resources will be made available here when ready to share. We do
              not list documents that have not been provided by the organization.
            </p>
          </div>
          {downloadableResources.length ? (
            <div className="resource-list fx-reveal fx-right">
              {downloadableResources.map((resource) => (
                <a className="report-card" href={resource.file} download key={resource.file}>
                  <span>{resource.fileType}</span>
                  <strong>{resource.title}</strong>
                  <p>{resource.description}</p>
                  <span className="resource-download">
                    Download resource <ArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="report-card fx-reveal fx-right">
              <span>01</span>
              <strong>Resources are being prepared</strong>
              <p>Contact MAKAZI for verified organizational information.</p>
              <a href={`mailto:${organization.email}`}>
                Request information <ArrowUpRight aria-hidden="true" />
              </a>
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
              <span /> Support children in Iganga
            </p>
            <h2>Help create room to grow.</h2>
            <p>Learn how to support our education and community work.</p>
          </div>
          <Link className="button button-accent fx-button fx-reveal fx-right" href="/donate">
            Support our work <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <p className="sr-only">{siteSettings.photoNotice}</p>
    </main>
  )
}
