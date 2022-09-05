import '@/styles/tailwind.css'
import '@fontsource/inter/variable.css'
import 'focus-visible'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
          name="description"
        />
        <meta property="og:url" content="https://heroicons.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Heroicons" />
        <meta
          property="og:description"
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
        />
        <title>Heroicons</title>
        <meta property="og:title" content="Heroicons" />
        <meta property="og:image" content="/social-card.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindlabs" />
        <meta name="twitter:title" content="Heroicons" />
        <meta
          name="twitter:description"
          content="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
        />
        <meta name="twitter:image" content="social-card.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
