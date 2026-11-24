import { PageIntro } from '@/components/site/page-intro'
import { GalleryGrid } from '@/components/site/gallery-grid'

export const metadata = { title: 'Gallery', description: 'Browse representative images related to education, families and community development in Iganga, Uganda.' }

export default function GalleryPage() {
  return (
    <main id="main-content" className="fx-page fx-home">
      <PageIntro eyebrow="Gallery" title="Learning, connection and community." description="Browse representative imagery related to education, family and community development. Images do not document a specific MAKAZI activity." image="/images/learning-materials.png" imageAlt="Learning materials on a desk, representative image" />
      <section className="section fx-section"><div className="container"><div className="gallery-page-intro fx-reveal"><div><p className="eyebrow"><span /> Photo gallery</p><h2>Moments of possibility.</h2></div><p>Images on this site are illustrative. Children’s privacy and consent remain a priority in any future photography.</p></div><GalleryGrid /></div></section>
    </main>
  )
}
