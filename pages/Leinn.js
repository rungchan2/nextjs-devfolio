import Layout from "../components/layout";
import Bookoint from "../components/bookPoint"
import CustomerVisit from "../components/customerVisit"
import { TOKEN, DATABASE_ID_BOOKPOINT } from "../config/index"
import Head from 'next/head'


export default function Leinn({projectBookpoint}) {
  return (
    <Layout >
        <Head>
            <title>NextJs 프로젝트</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>


      <div className="flex flex-cols text-3xl grid gap-4 flex w-80">
          
          {projectBookpoint.results.map(books => 
            <Bookoint 
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

  const projectBookpoint = await res.json()

  return {
    props: {projectBookpoint }
  }
}
