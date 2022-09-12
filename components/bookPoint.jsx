

export default function bookPoint({data}) {

  const point = data.properties.점수.number
  const topic = data.properties.주제.select.name
  const readOrNot = data.properties.읽은책.checkbox

  function check() {
    if (readOrNot === true) {
      return "O"
    } else {
      return "X"
    }
  }
  const torf = check()
  const name = data.properties.책이름.title[0].plain_text


  return (
    <>
      <div className="border-4 border-gray-600 rounded-3xl">
        <h1>책 이름 : {name}</h1>
        <h1>주제 : {topic}</h1>
        <h1>점수 : {point}</h1>
        <h1>읽었는지? : {torf}</h1>
        
        
      </div>
    </>
  );
}