import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="antialiased bg-white [font-feature-settings:'cv02','cv03','cv04','cv11']"
    >
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
