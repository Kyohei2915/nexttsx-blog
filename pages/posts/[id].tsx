import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout';
import Link from 'next/link';


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
      <article className="prose prose-green dark:prose-dark">
      <h1 className="title-font text-xl font-medium text-gray-900 dark:text-white mb-3">{postData.title}</h1>
        <div className="text-gray-500 pb-2 mb-2 border-b-2 ">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
       </article>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/">
          ← Back to home
        </Link>
      </button>
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