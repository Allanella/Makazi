'use client'

import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'

export function ShareArticle() {
  const [message, setMessage] = useState('')

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href })
        setMessage('Thanks for sharing.')
        return
      }
      await navigator.clipboard.writeText(window.location.href)
      setMessage('Link copied to clipboard.')
    } catch {
      setMessage('Sharing is unavailable. You can copy the page address from your browser.')
    }
  }

  return <div className="article-share"><button type="button" onClick={share}><Share2 aria-hidden="true" /> Share this story</button>{message && <span role="status">{message}</span>}</div>
}
