import Head from 'next/head'
//import Header from '../components/Header'
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
//import Footer from '../components/footer';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
        <header className="py-2">
      <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl md:text-xl font-bold ml-3 text-gray-900 dark:text-white">
                Kyohei Blog
              </h1>
            </Link>
            <ThemeSwitch />
          </div>
        </header>
      );
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            pageTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <main>{children}</main>
  </div>
  )
}

export default Layout;