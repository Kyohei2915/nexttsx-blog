import Head from 'next/head'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
//import Footer from '../components/footer'


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
      <section className="md:flex bg-white dark:bg-gray-800 rounded-xl p-8 md:p-0">
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
<section className="text-gray-600 body-font">
<h3 className="text-4xl font-normal leading-normal mt-0 mb-5 text-emerald-800">Blog</h3>
  <ul className="block mt-1 leading-tight font-medium">
    {allPostsData.map(({ id, date, title }) => (
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-4 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"> <Date dateString={date} /></span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none"> <Date dateString={date} /></span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">CATEGORY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 dark:text-white mb-3" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link></h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-3"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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