//import { ThemeProvider } from 'next-themes';
import '../styles/global.css';
import Layout from '../components/layout';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Footer from '../components/footer';
import Header from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <><Header /><Layout>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS." />
      </Head>
      <Component {...pageProps} />
    </Layout><Footer /></>
  );
}
export default App
