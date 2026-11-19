import { PageIntro } from '@/components/site/page-intro'
import { NewsList } from '@/components/site/news-list'
import { newsArticles } from '@/data/news'

export const metadata = { title: 'News & stories', description: 'Read verified news and community updates from MAKAZI Education Initiative in Iganga, Uganda.' }

export default function NewsPage() {
  return (
    <main id="main-content">
      <PageIntro eyebrow="News & stories" title="Updates from our community." description="Verified news, learning and community stories from MAKAZI Education Initiative." compact />
      <section className="section"><div className="container"><div className="news-listing-top"><p className="eyebrow"><span /> Latest updates</p><p>We share only verified information and stories with appropriate consent.</p></div><NewsList articles={newsArticles} /></div></section>
    </main>
  )
}
