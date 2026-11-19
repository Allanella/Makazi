'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import type { NewsArticle } from '@/data/news'

export function NewsList({ articles }: { articles: NewsArticle[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]
  const filtered = useMemo(() => articles.filter((article) => {
    const matchesQuery = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All' || article.category === category)
  }), [articles, category, query])

  return (
    <>
      {articles.length > 0 && <div className="gallery-filters news-categories" aria-label="Filter news by category">{categories.map((item) => <button key={item} type="button" className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>}
      <label className="news-search">
        <Search aria-hidden="true" />
        <span className="sr-only">Search news and stories</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search updates..." />
      </label>
      {filtered.length ? (
        <div className="news-grid">
          {filtered.map((article) => (
            <article className="news-card" key={article.slug}>
              <Link href={`/news/${article.slug}`} className="news-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /></Link>
              <div className="news-card-body"><span>{article.category} · {new Date(article.date).toLocaleDateString('en', { dateStyle: 'long' })}</span><h2><Link href={`/news/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p><Link className="text-link" href={`/news/${article.slug}`}>Read story <ArrowUpRight aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><span className="empty-mark">M</span><h2>{query ? 'No updates match your search' : 'New stories are on the way'}</h2><p>{query ? 'Try another keyword.' : 'We are preparing verified updates to share here. For the latest information, contact the MAKAZI team directly.'}</p></div>
      )}
    </>
  )
}
