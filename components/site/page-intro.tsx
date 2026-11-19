import Image from 'next/image'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  compact?: boolean
}

export function PageIntro({ eyebrow, title, description, image, imageAlt = '', compact = false }: PageIntroProps) {
  return (
    <section className={`page-intro${compact ? ' page-intro-compact' : ''}`}>
      <div className="container page-intro-grid">
        <div className="page-intro-copy">
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
        </div>
        {image ? (
          <div className="page-intro-image"><Image src={image} alt={imageAlt} fill sizes="(max-width: 720px) 100vw, 42vw" priority loading="eager" /></div>
        ) : <div className="page-intro-art" aria-hidden="true"><span>MAKAZI</span><span className="art-orbit" /></div>}
      </div>
    </section>
  )
}
