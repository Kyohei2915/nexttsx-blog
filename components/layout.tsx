import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'

const name = 'Kyohei'
export const siteTitle = 'Non-Engineer-Blog'


export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer>
        &copy; {siteTitle}
      </footer>

      <style jsx>{`
        .page {
          padding: 2em 1em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 4em;
        }

        .site-title a {
          color: inherit;
          text-decoration: none;
        }

        footer {
          margin-top: 4em;
          padding-top: 2em;
          padding-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans JP', -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          color: #222;
        }

        img,
        iframe {
          max-width: 100%;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}