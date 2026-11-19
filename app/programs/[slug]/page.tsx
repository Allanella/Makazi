import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PageIntro } from '@/components/site/page-intro'
import { programs } from '@/data/programs'

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = programs.find((item) => item.slug === slug)
  return program ? { title: program.title, description: program.shortDescription } : { title: 'Program not found' }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = programs.find((item) => item.slug === slug)
  if (!program) notFound()

  return (
    <main id="main-content">
      <PageIntro eyebrow={`Program area ${program.number}`} title={program.title} description={program.shortDescription} image={program.image} imageAlt={program.imageAlt} compact />
      <section className="section"><div className="container detail-layout"><div className="detail-main"><Link className="back-link" href="/programs"><ArrowLeft aria-hidden="true" /> All program areas</Link><h2>Building opportunity, together.</h2><p className="body-large">{program.description}</p><div className="detail-priorities"><h3>Our focus includes</h3>{program.priorities.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div><aside className="detail-sidebar"><Image src={program.image} alt={program.imageAlt} width={640} height={480} /><p>MAKAZI supports vulnerable and underserved communities through local partnership and family-centred work.</p><Link className="button button-primary" href="/get-involved">Get involved <ArrowUpRight aria-hidden="true" /></Link></aside></div></section>
    </main>
  )
}
