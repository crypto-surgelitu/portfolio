import { Helmet } from 'react-helmet-async'

export default function PageMeta({ title, description, image = '/og-image.png', path = '' }) {
  const siteUrl = 'https://anthonymuhati.dev'
  const fullUrl = `${siteUrl}${path}`

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Anthony Muhati" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content="Anthony Muhati" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:creator" content="@anthonymuhati" />
    </Helmet>
  )
}
