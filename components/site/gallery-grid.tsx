'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { galleryCategories, galleryItems } from '@/data/gallery'
import { siteSettings } from '@/data/site-settings'

type GalleryItem = (typeof galleryItems)[number]

export function GalleryGrid() {
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const visibleItems = category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)

  useEffect(() => {
    if (!selected) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selected])

  return (
    <>
      <div className="gallery-filters" aria-label="Filter gallery by category">
        {galleryCategories.map((item) => (
          <button key={item} className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)} type="button">{item}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {visibleItems.map((item) => (
          <button className="gallery-item" key={item.id} type="button" onClick={() => setSelected(item)} aria-label={`View ${item.title}`}>
            <span className="gallery-photo"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></span>
            <span className="gallery-caption"><span>{item.category}</span><strong>{item.title}</strong></span>
          </button>
        ))}
      </div>
      <p className="photo-note">{siteSettings.photoNotice}</p>
      {selected && (
        <div className="lightbox-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null) }}>
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title}>
            <button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setSelected(null)}><X aria-hidden="true" /></button>
            <div className="lightbox-image"><Image src={selected.image} alt={selected.imageAlt} fill sizes="90vw" /></div>
            <div className="lightbox-caption"><span>{selected.category}</span><strong>{selected.title}</strong></div>
          </div>
        </div>
      )}
    </>
  )
}
