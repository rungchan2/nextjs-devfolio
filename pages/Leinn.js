import Layout from "../components/layout";
import BookPoint from "../components/bookPoint"
import CustomerVisit from "../components/customerVisit"
import { TOKEN, DATABASE_ID_BOOKPOINT } from "../config/index"
import Head from 'next/head'


export default function LeinnBP({LeinnBP}) {
  return (
    <Layout >
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


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 flex flex-cols text-3xl">
          
          {LeinnBP.results.map(books => 
            <BookPoint 
              key={books.id}
              data={books}/>
          )}
          
      </div>

          <CustomerVisit/>
        
        
      
    </Layout>
  );
}

export async function getStaticProps() {

  const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-02-22',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        sorts: [
          {
            "property": "읽은책",
            "direction": "descending"
          }
        ],
        page_size: 100
      })
    };
    
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID_BOOKPOINT}/query`, options)

  const LeinnBP = await res.json()

  return {
    props: {LeinnBP }
  }
}
