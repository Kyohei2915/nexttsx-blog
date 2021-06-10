import 'tailwindcss/tailwind.css'
//import { AppProps } from 'next/app'
import React from 'react'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
//export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
//}

