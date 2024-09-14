import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          {/* Add your Google Tag Manager script */}
        </Head>
      
      <body>
          {/* Add Google Tag Manager iframe */}
    
          {/* End Google Tag Manager iframe */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
