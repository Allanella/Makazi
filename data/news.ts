export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  imageAlt: string
  content: string[]
}

// Add verified updates here. Only publish stories and images with appropriate consent.
export const newsArticles: NewsArticle[] = []
