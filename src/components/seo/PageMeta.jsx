import { useEffect } from 'react'

export default function PageMeta({ title, description, image = '/og-image.png', path = '' }) {
  const siteUrl = 'https://anthonymuhati.com'
  const fullUrl = `${siteUrl}${path}`
  const fullImage = `${siteUrl}${image}`

  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content, isProperty = false) => {
      if (!content) return
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('description', description)
    setMeta('author', 'Anthony Muhati')
    setMeta('robots', 'index, follow')
    setLink('canonical', fullUrl)

    setMeta('og:type', 'website', true)
    setMeta('og:url', fullUrl, true)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:image', fullImage, true)
    setMeta('og:locale', 'en_KE', true)
    setMeta('og:site_name', 'Anthony Muhati', true)

    setMeta('twitter:card', 'summary_large_image', true)
    setMeta('twitter:url', fullUrl, true)
    setMeta('twitter:title', title, true)
    setMeta('twitter:description', description, true)
    setMeta('twitter:image', fullImage, true)
    setMeta('twitter:creator', '@anthonymuhati', true)

  }, [title, description, fullUrl, fullImage])

  return null
}