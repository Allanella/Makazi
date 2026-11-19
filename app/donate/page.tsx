import Link from 'next/link'
import { ArrowUpRight, BookOpen, HeartPulse, Mail, Phone, ShieldCheck, Sprout } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { InquiryForm } from '@/components/forms/inquiry-form'
import { siteSettings } from '@/data/site-settings'
import { organization } from '@/data/organization'

export const metadata = {
  title: 'Support our work',
  description: 'Contact MAKAZI Education Initiative to discuss supporting children’s education and community development in Iganga.'
}

const supportAreas = [
  {
    title: 'Children’s education',
    text: 'Support the work that helps vulnerable children access learning opportunities, school materials and mentorship.',
    icon: BookOpen
  },
  {
    title: 'Essential health support',
    text: 'Contribute to efforts that promote access to preventative health services and overall family well-being.',
    icon: HeartPulse
  },
  {
    title: 'Community empowerment',
    text: 'Help strengthen practical skills, resilient families and sustainable community-led development.',
    icon: Sprout
  }
]

const steps = [
  {
    title: 'Reach out',
    text: 'Share your interest through the form, by email or by phone.'
  },
  {
    title: 'Talk with our team',
    text: 'We discuss current needs and the most appropriate ways to contribute.'
  },
  {
    title: 'Receive current details',
    text: 'We share up-to-date instructions directly with you.'
  }
]

export default function DonatePage() {
  return (
    <main id="main-content" className="fx-home">
      <PageIntro
        eyebrow="Support our work"
        title="Help make opportunity possible."
        description="Your generosity can contribute to education, health and sustainable community development in Iganga."
        image="/images/learning-materials.png"
        imageAlt="Learning materials arranged on a wooden desk"
      />

      {/* Where Support Helps & Transparency Notice */}
      <section className="section fx-section">
        <span className="fx-blob fx-blob-a" aria-hidden="true" />
        <div className="container">
          <div className="section-topline fx-reveal">
            <SectionHeading
              eyebrow="Where support can help"
              title="A contribution can make room for possibility."
              description="Contact the team to discuss current needs and appropriate ways to contribute."
            />
            <a className="text-link section-side-link" href="#donation-inquiry">
              Start an inquiry <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="donation-areas">
            {supportAreas.map(({ title, text, icon: Icon }, index) => (
              <article className="donation-card fx-card fx-reveal fx-zoom-in" key={title}>
                <div className="donation-card-top">
                  <span className="focus-number">0{index + 1}</span>
                  <span className="focus-icon">
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="text-link" href="#donation-inquiry">
                  Inquire about this area <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="donation-note fx-reveal">
            <div className="note-mark" aria-hidden="true">
              <ShieldCheck size={22} />
            </div>
            <div className="donation-note-body">
              <strong>Safe and transparent giving</strong>
              <p>{siteSettings.donationNote}</p>
              <a className="text-link" href={`mailto:${organization.email}`}>
                Email MAKAZI directly <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-how fx-section">
        <div className="container">
          <div className="section-heading-center fx-reveal">
            <SectionHeading
              eyebrow="How it works"
              title="Three simple steps to get started."
              description="No payment is collected on this website. We guide you personally."
            />
          </div>
          <ol className="donation-steps">
            {steps.map((step, index) => (
              <li className="donation-step fx-reveal" key={step.title}>
                <span className="donation-step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Two-Column Inquiry Form Section */}
      <section className="section section-soft fx-section" id="donation-inquiry">
        <div className="container form-layout">
          <div className="form-intro fx-reveal fx-left">
            <SectionHeading
              eyebrow="Make an inquiry"
              title="Let’s talk about your support."
              description="Share your interest and we will get back to you with current information. This form does not process or collect payment."
            />

            <div className="contact-details">
              <a className="contact-row contact-row-card" href={`tel:${organization.phoneHref}`}>
                <span className="contact-row-icon">
                  <Phone aria-hidden="true" />
                </span>
                <div>
                  <strong>Direct telephone</strong>
                  <span>{organization.phone}</span>
                </div>
              </a>
              <a className="contact-row contact-row-card" href={`mailto:${organization.email}`}>
                <span className="contact-row-icon">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <strong>Email our team</strong>
                  <span>{organization.email}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="fx-reveal fx-right">
            <InquiryForm kind="donation" />
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="cta-band fx-cta">
        <span className="fx-blob fx-blob-b" aria-hidden="true" />
        <span className="fx-blob fx-blob-c" aria-hidden="true" />
        <div className="container cta-band-inner">
          <div className="fx-reveal fx-left">
            <p className="eyebrow eyebrow-light">
              <span /> Other ways to help
            </p>
            <h2>Time, knowledge and partnership matter too.</h2>
            <p>Explore volunteering and community participation opportunities.</p>
          </div>
          <div className="cta-actions fx-reveal fx-right">
            <Link className="button button-accent fx-button" href="/get-involved">
              Get involved <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}