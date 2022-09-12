import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/Home/hero'
import Animation from '../components/Home/animation'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>이희찬의 포트폴리오</title>
        <meta name="description" content="이희찬" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="희찬 프로젝트"/>
        <meta property="og:description" content="이희찬의 포트폴리오입니다."/>
        <meta property="og:image" content="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
        <meta property="og:url" content="https://nextjs-devfolio.vercel.app/"/>
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
          
        </div>
      </section>
      
    </Layout>
  
  )
}
