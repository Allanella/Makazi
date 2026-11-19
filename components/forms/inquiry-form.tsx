'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import { organization } from '@/data/organization'

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  phone: z.string().trim().min(7, 'Enter a phone number we can reach you on.'),
  organizationName: z.string().optional(),
  areaOfInterest: z.string().min(1, 'Choose an area of interest.'),
  subject: z.string().trim().min(2, 'Please add a subject.'),
  amount: z.string().optional(),
  message: z.string().trim().min(12, 'Please add a little more detail.'),
  website: z.string().optional(),
})

type InquiryValues = z.infer<typeof inquirySchema>
type InquiryKind = 'contact' | 'volunteer' | 'partnership' | 'donation' | 'involvement'

const interestOptions = [
  'Education support',
  'Health and well-being',
  'Skills development',
  'Family and community development',
  'Volunteering',
  'Partnership',
  'Donation inquiry',
  'General inquiry',
]

const formCopy: Record<InquiryKind, { title: string; intro: string; button: string }> = {
  contact: {
    title: 'Send us a message',
    intro: 'Tell us how we can help and our team will be in touch.',
    button: 'Send inquiry',
  },
  volunteer: {
    title: 'Become a volunteer',
    intro: 'Share your interests and how you would like to contribute.',
    button: 'Send volunteer inquiry',
  },
  partnership: {
    title: 'Explore a partnership',
    intro: 'Let us know about your organization and the work you would like to explore together.',
    button: 'Send partnership inquiry',
  },
  donation: {
    title: 'Support our work',
    intro: 'Tell us how you would like to contribute. We will share current instructions directly.',
    button: 'Send donation inquiry',
  },
  involvement: {
    title: 'Volunteer or partner with us',
    intro: 'Tell us where you would like to contribute and how we can connect.',
    button: 'Send your inquiry',
  },
}

export function InquiryForm({ kind = 'contact' }: { kind?: InquiryKind }) {
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
  const copy = formCopy[kind]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      organizationName: '',
      areaOfInterest: '',
      subject: '',
      amount: '',
      message: '',
      website: '',
    },
  })

  async function submit(values: InquiryValues) {
    setNotice(null)
    if (values.website) {
      setNotice({ type: 'success', text: 'Thank you. Your inquiry has been received.' })
      return
    }
    if (!endpoint) return

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: kind, ...values }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setNotice({ type: 'success', text: 'Thank you. Your message has been sent.' })
      reset()
    } catch {
      setNotice({
        type: 'error',
        text: 'We could not send your message right now. Please email or call us directly.',
      })
    }
  }

  return (
    <div className="form-card">
      <div className="form-card-heading">
        <p className="eyebrow">
          <span /> Get in touch
        </p>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit(submit)} noValidate>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={`${kind}-website`}>Leave this field empty</label>
          <input id={`${kind}-website`} tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>
              Full name <b aria-hidden="true">*</b>
            </span>
            <input
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              {...register('fullName')}
              placeholder="Your name"
            />
            {errors.fullName && <small role="alert">{errors.fullName.message}</small>}
          </label>

          <label className="form-field">
            <span>
              Email address <b aria-hidden="true">*</b>
            </span>
            <input
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              {...register('email')}
              placeholder="you@example.com"
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </label>

          <label className="form-field">
            <span>
              Phone number <b aria-hidden="true">*</b>
            </span>
            <input
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              {...register('phone')}
              placeholder="+256 ..."
            />
            {errors.phone && <small role="alert">{errors.phone.message}</small>}
          </label>

          <label className="form-field">
            <span>
              Organization <em>Optional</em>
            </span>
            <input
              autoComplete="organization"
              {...register('organizationName')}
              placeholder="Organization name"
            />
          </label>

          <label className="form-field">
            <span>
              Area of interest <b aria-hidden="true">*</b>
            </span>
            <select
              aria-invalid={Boolean(errors.areaOfInterest)}
              {...register('areaOfInterest')}
              defaultValue=""
            >
              <option value="" disabled>
                Select an area
              </option>
              {interestOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.areaOfInterest && <small role="alert">{errors.areaOfInterest.message}</small>}
          </label>

          <label className="form-field">
            <span>
              Subject <b aria-hidden="true">*</b>
            </span>
            <input
              aria-invalid={Boolean(errors.subject)}
              {...register('subject')}
              placeholder="How can we help?"
            />
            {errors.subject && <small role="alert">{errors.subject.message}</small>}
          </label>

          {kind === 'donation' && (
            <label className="form-field form-field-full">
              <span>
                Contribution amount <em>Optional — no payment is collected here</em>
              </span>
              <input
                inputMode="decimal"
                {...register('amount')}
                placeholder="Amount you are considering"
              />
            </label>
          )}

          <label className="form-field form-field-full">
            <span>
              Message <b aria-hidden="true">*</b>
            </span>
            <textarea
              rows={5}
              aria-invalid={Boolean(errors.message)}
              {...register('message')}
              placeholder="Share a little more about your inquiry..."
            />
            {errors.message && <small role="alert">{errors.message.message}</small>}
          </label>
        </div>

        {notice && (
          <p className={`form-notice ${notice.type}`} role="status">
            {notice.text}
          </p>
        )}

        {!endpoint && (
          <div className="form-unavailable" role="status">
            <p>Online submissions are not enabled yet. Please reach us directly by email or phone.</p>
            <div className="form-unavailable-links">
              <a href={`mailto:${organization.email}`}>{organization.email}</a>
              <a href={`tel:${organization.phoneHref}`}>{organization.phone}</a>
            </div>
          </div>
        )}

        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={!endpoint || isSubmitting}
        >
          {isSubmitting ? (
            <LoaderCircle className="spin" aria-hidden="true" />
          ) : (
            <>
              {copy.button}
              <ArrowUpRight aria-hidden="true" />
            </>
          )}
        </button>

        <p className="form-privacy">
          Your details are sent to the configured inquiry service and are not stored by this website.
        </p>
      </form>
    </div>
  )
}

const newsletterSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.'),
  website: z.string().optional(),
})
type NewsletterValues = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
  const [notice, setNotice] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '', website: '' },
  })

  async function submit(values: NewsletterValues) {
    if (values.website) {
      setNotice('Thank you for your interest.')
      return
    }
    if (!endpoint) return
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email: values.email, website: values.website }),
      })
      if (!response.ok) throw new Error('Subscription failed')
      setNotice('Thank you. Your subscription request has been sent.')
      reset()
    } catch {
      setNotice('We could not send that request. Please contact us by email.')
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="newsletter-input-wrap">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          aria-invalid={Boolean(errors.email)}
          {...register('email')}
        />
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="newsletter-website">Leave this field empty</label>
          <input id="newsletter-website" tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>
        <button className="button button-light" disabled={!endpoint || isSubmitting} type="submit">
          Subscribe <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
      {errors.email && <small role="alert">{errors.email.message}</small>}
      {!endpoint && (
        <small>
          Newsletter sign-up is not connected yet. Email{' '}
          <a href={`mailto:${organization.email}`}>{organization.email}</a> to stay in touch.
        </small>
      )}
      {notice && <small role="status">{notice}</small>}
    </form>
  )
}