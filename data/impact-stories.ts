export type ImpactStory = {
  slug: string
  title: string
  summary: string
  category: string
  image: string
  imageAlt: string
  consentConfirmed: true
}

// Add only verified stories. The literal consent flag is required before publication.
export const impactStories: ImpactStory[] = []
