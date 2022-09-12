import Image from "next/image"

export default function ProjectItem({data}) {

  const imageNoteFoundurl = "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"

  const name = data.properties.name.title[0].plain_text
  const Link = data.properties.Link.url
  const Description = data.properties.Description.rich_text[0].plain_text
  const Tags = data.properties.Tags.multi_select

  const Workperiod_start = data.properties.Workperiod.date.start
  const Workperiod_end = data.properties.Workperiod.date.end 
  const ImageSrc = data.cover?.file?.url || data.cover?.external.url || imageNoteFoundurl 

  const calculateDate = (Workperiod_start, Workperiod_end) => {

    if (Workperiod_end === null) {
      return []
    } else {
        const startDateArray = Workperiod_start.split('-')
        const endDateArray = Workperiod_end.split('-')

        var startDate = new Date(startDateArray[0], startDateArray[1], startDateArray[2])
        var endDate = new Date(endDateArray[0], endDateArray[1], endDateArray[2])

        const diffInMs = Math.abs(endDate - startDate)
        const result = diffInMs / (1000 * 60 * 60 * 24)

        return result
    }

 
  }

  return (
    <div className="project-card">

      <Image
        className="rounded-t-xl"
        src={ImageSrc}
        alt="Cover_Img"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover" //contain, fill, none
        quality={100}
      />
      
      <div className="p-4 flex flex-col ">

        <h1 className="text-2xl font-bold">{name}</h1>
        <h3 className="mt-3 text-xl">{Description}</h3>

        <a target="_blank" rel="noreferrer" href={Link} >프로젝트 링크</a>
        
        <div className="flex flex-wrap items-start mt-2">
          {Tags.map(tags => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-100 dark:bg-sky-700 w-30" key={tags.id}>{tags.name}</h1>
          ))}
        </div>

        {/* 만약 끝나는 날짜가 있으면 */}
        {typeof Workperiod_end === "string" && 
          <h1 className="my-1">작업기간 : {Workperiod_start} ~ {Workperiod_end},&nbsp;&nbsp;  
            <span className="text-bold">({calculateDate(Workperiod_start, Workperiod_end)}일)</span>
          </h1>
        }

        {/* 만약에 끝나는 날짜가 없으면 */}
        {Workperiod_end === null && 
          <h1>일자 : {Workperiod_start}</h1>
        }
        
            
      </div>

    </div>
  );
}