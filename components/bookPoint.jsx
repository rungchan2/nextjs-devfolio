

export default function bookPoint({data}) {

  const point = data.properties.점수.number
  const topic = data.properties.주제.select.name
  const readOrNot = data.properties.읽은책.checkbox
  const name = data.properties.책이름.title[0].plain_text

  
  //console.log(result.map(a => ()))

  return (
    <>
      <div className="border-4 border-gray-600 rounded-3xl">
        <h1>점수 : {point}</h1>
        <h1>점수 : {topic}</h1>
        <h1>점수 : {readOrNot}</h1>
        <h1>점수 : {name}</h1>
        
      </div>
    </>
  );
}