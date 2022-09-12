import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image';
import '../styles/aboutMe.module.scss'
import Link from 'next/link'


export default function aboutMe() {
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

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Contact Me</h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    레인 서울 1기 이희찬, 닉네임은 리노(Lino) 입니다. 예술과, 코딩, 언어에 관심 있는 레이너 입니다. 자신의 관심사와 장점을 살려 세상을 바꿔보고 선한 영향력을 끼치는 일을 하고 싶은 22살 대학생입니다.
                    </p>
                  <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 place-items-center place-content-center flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        className="w-10 h-10" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Instagram</h2>
                      <p className="leading-relaxed text-base">Main : @leehc_09,<br/>Photograph : @anyway_record</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Kakaotalk</h2>
                      <p className="leading-relaxed text-base">Kakaotalk Id : leeheecchan0907<br/> To Kakaotalk Profile :</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Tel.</h2>
                      <p className="leading-relaxed text-base">+82 10-2625-9706</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-20">
                  <Link href="/">
                  <a className="button-project">
                    To Home</a>
                  </Link>
                </div>
              </div>
            </section>
  
        </Layout>
    );
}

