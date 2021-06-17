import Head from 'next/head'
//import Header from '../components/Header'
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
//import Footer from '../components/footer';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};
const siteTitle = "Kyohei Blog"

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
        <header className="fixed flex w-full p-3 bg-teal-500 bg-green-500 dark:bg-green-500">
          <div className="flex items-center text-white">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
              <Link href="/"><span className="font-semibold text-3xl tracking-tight">{siteTitle}</span></Link>
              <div className="absolute right-3">
                  <ThemeSwitch />
              </div>     
          </div>
        </header>
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

  <footer className="text-gray-400">
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
             <Link href="/"><span className="ml-3 text-xl">{siteTitle}</span></Link>
            </a>
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2021 {siteTitle} —
              <Link href="/">
              <a className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Kyohei</a>
              </Link>
            </p>
        </div>
      </div>
  </footer>
  </div>
  )
}

export default Layout;