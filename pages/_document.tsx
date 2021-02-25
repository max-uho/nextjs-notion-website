import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/> 
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,500;0,800;1,500;1,800&family=Roboto:ital,wght@0,500;1,500&display=swap" rel="stylesheet"/>
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />
            <script src='jquery.js'/>
            <script src='jquery.sidenotes.js'/>
            <Main />

            <NextScript />
            <script src='footnotes.js'/>
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
