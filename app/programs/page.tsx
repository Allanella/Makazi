import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { programs } from '@/data/programs'

export const metadata = { title: 'Our programs', description: 'Explore MAKAZI Education Initiative focus areas: education, health, practical skills and family-centred community development.' }

export default function ProgramsPage() {
  return (
    <main id="main-content">
      <PageIntro eyebrow="Our programs" title="Practical pathways to stronger communities." description="Our focus areas connect to one another—supporting children, families and communities to learn, thrive and build self-reliance." image="/images/community-learning.png" imageAlt="Community members sharing knowledge around a table" />
      <section className="section"><div className="container"><div className="section-intro-row"><SectionHeading eyebrow="Where we focus" title="Four connected areas of support." description="Each program area reflects MAKAZI's commitment to practical opportunity and sustainable community development." /></div><div className="program-list">{programs.map((program, index) => <article className={`program-feature${index % 2 ? ' program-feature-reverse' : ''}`} key={program.slug}><div className="program-image"><Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 720px) 100vw, 45vw" /></div><div className="program-feature-copy"><span className="program-number">{program.number} / PROGRAM AREA</span><h2>{program.title}</h2><p>{program.shortDescription}</p><ul>{program.priorities.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/programs/${program.slug}`}>Explore this focus area <ArrowUpRight aria-hidden="true" /></Link></div></article>)}</div></div></section>
      <section className="section section-soft"><div className="container approach-cta"><div><p className="eyebrow"><span /> Our approach</p><h2>Every community has the knowledge to <em>move forward.</em></h2></div><p>MAKAZI works in partnership with local stakeholders, building on community strengths and supporting practical, lasting change.</p></div></section>
    </main>
  )
}
