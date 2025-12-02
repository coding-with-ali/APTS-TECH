import Head from 'next/head'

interface SEOProps {
  title?: string
  desc?: string
  image?: string
  url?: string
  keywords?: string
}

export default function SEO({ title, desc, image, url, keywords }: SEOProps) {
  const defaultTitle = 'APTS TECH – Enterprise Software & AI Solutions'
  const defaultDesc =
    'APTS TECH delivers next-generation software, AI, and cybersecurity solutions for global enterprises.'
  const defaultKeywords = 'software, AI, cybersecurity, enterprise solutions, technology'
  const metaTitle = title ? `${title} | APTS TECH` : defaultTitle
  const metaDesc = desc || defaultDesc
  const metaKeywords = keywords || defaultKeywords

  return (
    <Head>
      {/* Basic SEO */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || 'https://apts-techs.vercel.app'} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="APTS TECH" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content="@apts_tech" />

      {/* Structured Data (Organization JSON-LD) */}
      {url && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "APTS TECH",
              "url": url,
              "logo": image || '',
              "sameAs": [
                "https://www.linkedin.com/company/apts-tech",
                "https://twitter.com/apts_tech"
              ]
            })
          }}
        />
      )}
    </Head>
  )
}
