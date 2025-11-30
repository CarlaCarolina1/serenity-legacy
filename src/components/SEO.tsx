import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  schema?: object
}

const SEO = ({ 
  title, 
  description, 
  keywords = 'real estate, buying properties, selling properties, land, customizable homes, new residential, commercial real estate, Orlando real estate, Central Florida real estate, homes for sale, property investment',
  image = 'https://serenitylegacy.net/logo.png',
  url = 'https://serenitylegacy.net',
  type = 'website',
  schema
}: SEOProps) => {
  const fullTitle = `${title} | Serenity Legacy Real Estate - Orlando, Florida`
  const fullUrl = url.startsWith('http') ? url : `https://serenitylegacy.net${url}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Carla Carolina - Serenity Legacy Real Estate" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Serenity Legacy Real Estate" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Local Business Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO

