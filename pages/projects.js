import Layout from "../components/layout";
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item"



export default function projects({projects, projectIds}) {


    return (
        <Layout className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
            <Head>
                <title>NextJs 프로젝트</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="">
              <h1 className="m-10 text-center text-5xl font-bold sm:text-5xl">
                프로젝트 수 : 
                <span className="pl-4 text-blue-500">{projectIds.length}</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8">
                {projects.results.map(aProject => 
                  <ProjectItem 
                  key={aProject.id}
                  data={aProject}/>
                )}
              </div>
            </div>
            


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
              "property": "name",
              "direction": "descending"
            }
          ],
          page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    //console.log(projects.results[0].properties.name.title[0].plain_text)

    const projectIds = projects.results.map((aProject) => (
      aProject.properties.name.title[0].plain_text
    ))

    return {
      props: {projects, projectIds}, // will be passed to the page component as props
    }
  }