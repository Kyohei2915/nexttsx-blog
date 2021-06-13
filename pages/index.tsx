import Head from 'next/head'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>{'Title'}</title>
      </Head>
      <section className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <h2 className="pt-6 md:p-8 text-center md:text-left space-y-4">Blog</h2>
        <ul className="pt-6 md:p-8 text-center md:text-left space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-lg font-semibold" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-lg font-semibold">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}