import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'next-themes';
import '@tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
    <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
//export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
//}

