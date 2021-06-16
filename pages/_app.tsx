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
          name={siteTitle}
          content="プログラミング知識0の非エンジニアだけどNext.jsとやらでブログを制作しました。プログラミングや日常のできごとに関して記事にしていきます。" />
      </div>
      </Head>
      <Component {...pageProps} />
      </ThemeProvider>
  );
}
export default App
