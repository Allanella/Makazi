import type { MetadataRoute } from 'next'
import { programs } from '@/data/programs'
import { newsArticles } from '@/data/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined
  const baseUrl = (configuredSiteUrl || vercelUrl || 'http://localhost:3000').replace(/\/$/, '')
  const staticRoutes = ['', '/about', '/programs', '/impact', '/get-involved', '/donate', '/news', '/gallery', '/contact']

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: 'monthly' as const })),
    ...programs.map((program) => ({ url: `${baseUrl}/programs/${program.slug}`, changeFrequency: 'monthly' as const })),
    ...newsArticles.map((article) => ({ url: `${baseUrl}/news/${article.slug}`, lastModified: article.date, changeFrequency: 'yearly' as const })),
  ]
}
