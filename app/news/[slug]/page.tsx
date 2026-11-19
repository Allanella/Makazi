import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { newsArticles } from '@/data/news'
import { ShareArticle } from '@/components/site/share-article'

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsArticles.find((item) => item.slug === slug)
  return article ? { title: article.title, description: article.excerpt, openGraph: { images: [article.image] } } : { title: 'Story not found' }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsArticles.find((item) => item.slug === slug)
  if (!article) notFound()

  return (
    <main id="main-content" className="article-page">
      <div className="article-cover"><Image src={article.image} alt={article.imageAlt} fill priority sizes="100vw" /></div>
      <article className="article-content"><Link className="back-link" href="/news"><ArrowLeft aria-hidden="true" /> Back to updates</Link><div className="article-meta"><span>{article.category}</span><time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en', { dateStyle: 'long' })}</time></div><h1>{article.title}</h1><p className="article-lead">{article.excerpt}</p><div className="article-body">{article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><ShareArticle /><p className="article-consent-note">Stories and photographs are shared with appropriate permission. Contact MAKAZI for further information.</p>{newsArticles.filter((item) => item.slug !== article.slug && item.category === article.category).length > 0 && <aside className="related-articles"><h2>Related stories</h2>{newsArticles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3).map((item) => <Link key={item.slug} href={`/news/${item.slug}`}>{item.title}</Link>)}</aside>}</article>
    </main>
  )
}
