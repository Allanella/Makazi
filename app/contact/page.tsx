import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { InquiryForm } from '@/components/forms/inquiry-form'
import { organization } from '@/data/organization'
import { siteSettings } from '@/data/site-settings'

export const metadata = {
  title: 'Contact us',
  description: 'Contact MAKAZI Education Initiative in Iganga Municipality, Uganda by phone, email or inquiry form.'
}

const questions = [
  {
    question: 'Where is MAKAZI located?',
    answer: 'MAKAZI Education Initiative is located in Iganga Municipality, Uganda. Its postal address is P.O. Box 100053, Iganga.'
  },
  {
    question: 'How can I support MAKAZI?',
    answer: 'You can contact the team to discuss volunteering, partnerships or supporting the organization’s work. Donation instructions are shared directly by MAKAZI.'
  },
  {
    question: 'Can I visit or volunteer?',
    answer: 'Please contact the organization by email or phone to discuss current opportunities and arrangements.'
  },
  {
    question: 'How can I request more information?',
    answer: 'Email or call MAKAZI directly. The online inquiry form is available when the organization connects an external submission service.'
  }
]

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contact us"
        title="We would love to hear from you."
        description="Connect with MAKAZI Education Initiative to ask a question, explore partnership or learn more about our work."
        compact
      />

      {/* Contact Details & Inquiry Form */}
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="eyebrow">
              <span /> Contact details
            </p>
            <h2>Let’s start a conversation.</h2>
            <p className="contact-lead">
              Reach the team directly or use the inquiry form. We are based in Iganga Municipality, Uganda.
            </p>

            <div className="contact-detail-list">
              <a className="contact-detail-card" href={`mailto:${organization.email}`}>
                <span className="focus-icon">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <small>Email</small>
                  <strong>{organization.email}</strong>
                </div>
                <ArrowUpRight className="contact-detail-arrow" aria-hidden="true" />
              </a>

              <a className="contact-detail-card" href={`tel:${organization.phoneHref}`}>
                <span className="focus-icon">
                  <Phone aria-hidden="true" />
                </span>
                <div>
                  <small>Telephone</small>
                  <strong>{organization.phone}</strong>
                </div>
                <ArrowUpRight className="contact-detail-arrow" aria-hidden="true" />
              </a>

              <div className="contact-detail-card">
                <span className="focus-icon">
                  <MapPin aria-hidden="true" />
                </span>
                <div>
                  <small>Location & postal address</small>
                  <strong>{organization.location}</strong>
                  <p>{organization.postalAddress}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <InquiryForm kind="contact" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-soft map-section">
        <div className="container">
          <div className="section-topline">
            <div>
              <p className="eyebrow">
                <span /> Find us in Iganga
              </p>
              <h2>Rooted in our community.</h2>
              <p className="map-note">
                This map shows Iganga Municipality as a general reference, not an exact MAKAZI office pin.
              </p>
            </div>
            <a
              className="text-link section-side-link"
              href="https://maps.google.com/?q=Iganga+Municipality,+Uganda"
              target="_blank"
              rel="noreferrer"
            >
              Open Google Maps <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="map-embed">
            <iframe
              title="Map of Iganga Municipality, Uganda"
              src={siteSettings.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">
              <span /> Frequently asked
            </p>
            <h2>Helpful answers.</h2>
            <p className="faq-lead">
              For details not covered here, please contact our team directly.
            </p>
          </div>

          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary className="faq-question">
                  <span>{question}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Strip */}
      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">
              <span /> Direct reach
            </p>
            <h2>Prefer direct contact?</h2>
            <p>Reach out to our team by email or telephone during working hours.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-accent" href={`mailto:${organization.email}`}>
              Email MAKAZI <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={`tel:${organization.phoneHref}`}>
              Call {organization.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}