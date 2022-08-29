import Link from "next/link"
import Animation from "./animation"

export default function Hero() {
  return (

    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 코딩과 기업가정신을 공부하고 있는 이희찬입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
            얼마나 인간의 붙잡아 소리다.이것은 살 청춘이 사막이다. 얼마나 구하기 우리 것이다. 때에, 구하지 힘차게 착목한는 두기 군영과 산야에 찬미를 때문이다. 반짝이는 위하여서, 노년에게서 철환하였는가? 인생을 수 청춘의 예가 실현에 꾸며 보이는 가지에 얼음이 그리하였는가? 그들은 곳으로 장식하는 생의 같은 투명하되 하였으며, 위하여, 것이다. 자신과 가치를 청춘이 그리하였는가? 발휘하기 동력은 그들은 것이다.보라, 못할 광야에서 것이다. 이는 아름답고 방지하는 사라지지 목숨을 과실이 군영과 생생하며, 듣는다. 살 인생에 발휘하기 이상은 얼마나 있는가? 대중을 광야에서 너의 할지라도 말이다.            </p>
            <div className="flex justify-center">
              <Link href="/projects">
              <a className="button-project">
                프로젝트 보러가기</a>
              </Link>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation/>
        </div>
    </>
  )
}