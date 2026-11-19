import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, HandHeart, HeartHandshake, UsersRound } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { InquiryForm } from '@/components/forms/inquiry-form'

export const metadata = { title: 'Get involved', description: 'Volunteer, partner with or support MAKAZI Education Initiative and community development in Iganga, Uganda.' }

const ways = [
  { title: 'Become a volunteer', text: 'Share your time, experience or skills in a way that supports MAKAZI’s community-focused work.', icon: HandHeart, href: '#inquiry' },
  { title: 'Become a development partner', text: 'Explore opportunities to work alongside MAKAZI toward stronger education, health and family well-being.', icon: HeartHandshake, href: '#inquiry' },
  { title: 'Corporate partnerships', text: 'Start a conversation about responsible, community-centred collaboration.', icon: BriefcaseBusiness, href: '#inquiry' },
  { title: 'Community participation', text: 'Get in touch to learn more about participating in local community development.', icon: UsersRound, href: '#inquiry' },
]

export default function GetInvolvedPage() {
  return (
    <main id="main-content">
      <PageIntro eyebrow="Get involved" title="There is more than one way to make a difference." description="Join a community-focused effort to expand opportunity through education, health, practical skills and family empowerment." image="/images/community-learning.png" imageAlt="Community members sharing a learning conversation" />
      <section className="section"><div className="container"><SectionHeading eyebrow="Choose your path" title="Bring your time, ideas or partnership." description="Whether you are an individual, an organization or a community member, start with a conversation." /><div className="involve-grid">{ways.map(({ title, text, icon: Icon, href }, index) => <article className="involve-card" key={title}><span className="involve-number">0{index + 1}</span><span className="involve-icon"><Icon aria-hidden="true" /></span><h2>{title}</h2><p>{text}</p><Link className="text-link" href={href}>Start a conversation <ArrowUpRight aria-hidden="true" /></Link></article>)}</div></div></section>
      <section className="section section-soft"><div className="container support-child-grid"><div><p className="eyebrow"><span /> Support education</p><h2>Help a child take the next step.</h2><p>MAKAZI currently supports 28 children from rural communities in Iganga. Contact us to discuss how you might support a child&apos;s educational opportunities.</p><Link className="button button-primary" href="/donate">Support a child&apos;s education <ArrowUpRight aria-hidden="true" /></Link></div><div className="support-child-mark"><strong>28</strong><span>children currently supported</span></div></div></section>
      <section className="section" id="inquiry"><div className="container form-layout"><div className="form-intro"><SectionHeading eyebrow="Let’s talk" title="Tell us what you have in mind." description="Use this inquiry to share your interest in volunteering, a development partnership or community participation. Choose the closest area and our team will follow up directly." /><p>No submission service is configured by default. If the form is not enabled, please contact MAKAZI by phone or email.</p></div><InquiryForm kind="involvement" /></div></section>
    </main>
  )
}
