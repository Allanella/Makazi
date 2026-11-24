import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { organization } from '@/data/organization'

export const metadata = {
  title: 'About us',
  description:
    'Learn about MAKAZI Education Initiative, its mission, vision and community-centred values in Iganga, Uganda.',
}

export default function AboutPage() {
  return (
    <main id="main-content" className="fx-page fx-home">
      <PageIntro
        eyebrow="About MAKAZI"
        title="A community-rooted vision for a brighter future."
        description="We partner with local stakeholders to create opportunities for vulnerable and underserved communities in Iganga Municipality, Uganda."
        image="/images/community-learning.png"
        imageAlt="A community learning conversation in a welcoming local setting"
      />

      <section className="section fx-section">
        <div className="container about-profile-grid">
          <div className="fx-reveal fx-left">
            <SectionHeading
              eyebrow="Who we are"
              title="Building on the strength already within communities."
            />
            <p className="body-large">{organization.profileIntro}</p>
            <p>
              Our work is grounded in the belief that every individual can unlock their potential,
              enjoy equal opportunities and contribute to the well-being of their family and
              community. {organization.storyDisclosure}
            </p>
            <Link className="text-link" href="/programs">
              Explore our focus areas <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="profile-image fx-reveal fx-zoom-in">
            <Image
              src="/images/learning-materials.png"
              alt="Learning materials prepared for a classroom"
              fill
              sizes="(max-width: 720px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-purpose fx-section">
        <div className="container purpose-grid">
          <article className="purpose-card purpose-card-dark fx-reveal fx-left">
            <span>01 / OUR MISSION</span>
            <h2>How we work</h2>
            <p>{organization.mission}</p>
          </article>
          <article className="purpose-card purpose-card-gold fx-reveal fx-right">
            <span>02 / OUR VISION</span>
            <h2>What we believe in</h2>
            <p>{organization.vision}</p>
          </article>
        </div>
      </section>

      <section className="section fx-section" id="values">
        <div className="container">
          <div className="section-topline fx-reveal">
            <SectionHeading
              eyebrow="Our values"
              title="The commitments behind every action."
              description="Our values guide how we use resources, support families and work alongside communities."
            />
          </div>
          <div className="values-grid values-grid-large">
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

      <section className="section section-approach fx-section">
        <div className="container approach-grid">
          <div className="fx-reveal fx-left">
            <p className="eyebrow">
              <span /> Our approach
            </p>
            <h2>
              Development that starts with <em>people.</em>
            </h2>
            <p>{organization.approachIntro}</p>
          </div>
          <div className="approach-list fx-reveal fx-right">
            <article>
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <h3>Community partnership</h3>
                <p>Partnering with local stakeholders and respecting community knowledge.</p>
              </div>
            </article>
            <article>
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <h3>Family-centred support</h3>
                <p>Working alongside families to strengthen unity, dignity and resilience.</p>
              </div>
            </article>
            <article>
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <h3>Accountable stewardship</h3>
                <p>Acting transparently and remaining answerable to communities and partners.</p>
              </div>
            </article>
            <article>
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <h3>Long-term thinking</h3>
                <p>Promoting sustainable solutions that help communities become self-reliant.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band fx-cta">
        <span className="fx-blob fx-blob-b" aria-hidden="true" />
        <span className="fx-blob fx-blob-c" aria-hidden="true" />
        <div className="container cta-band-inner">
          <div className="fx-reveal fx-left">
            <p className="eyebrow eyebrow-light">
              <span /> Get involved
            </p>
            <h2>Let&apos;s build opportunity, together.</h2>
            <p>Connect with MAKAZI to explore volunteering, support or partnership.</p>
          </div>
          <Link className="button button-accent fx-button fx-reveal fx-right" href="/get-involved">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
