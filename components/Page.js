import Head from 'next/head'

const Page = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="white" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:image"
        content={`https://${process.env.DOMAIN}/static/thumbnail.png`}
      />
      <link rel="icon" sizes="192x192" href="/static/icon.png" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      <link rel="manifest" href="/static/manifest.webmanifest" />
    </Head>
    {children}
  </>
)

export default Page
