import '../styles/global.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';

const siteTitle = "Kyohei Blog"

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
      <Head>
      <div className="flex justify-between items-center">
        <title>{siteTitle}</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS." />
      </div>
      </Head>
      <Component {...pageProps} />
      </ThemeProvider>
  );
}
export default App
