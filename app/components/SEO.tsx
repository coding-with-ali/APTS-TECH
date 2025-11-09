import Head from 'next/head'

interface SEOProps {
  title?: string
  desc?: string
  image?: string
  url?: string
}

export default function SEO({ title, desc, image, url }: SEOProps) {
  const defaultTitle = 'APTS TECH – Enterprise Software & AI Solutions'
  const defaultDesc =
    'APTS TECH delivers next-generation software, AI, and cybersecurity solutions for global enterprises.'
  const metaTitle = title ? `${title} | APTS TECH` : defaultTitle
  const metaDesc = desc || defaultDesc

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
