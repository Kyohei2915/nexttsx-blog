import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout';
import Link from 'next/link';
import '@tailwindcss/typography'


export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose prose-green dark:prose-dark pt-24">
      <h1 className="title-font text-xl font-medium text-gray-900 dark:text-white mb-3 py-2 px-4">{postData.title}</h1>
        <div className="text-gray-500 pb-2 mb-2 px-4">
          <Date dateString={postData.date} />
        </div>
        <div className="px-4 text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
       </article>
      <p className="text-green-500 font-bold py-10 px-4">
        <Link href="/">
          ← Back to home
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}