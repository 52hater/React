import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1, d2, d3}) { 
  // MyDiv1에서 정의해서 보낸 d1, d2, d3 변수를 파라미터로 d1, d2, d3을 받아 (컴포넌트는 함수니까)
  // 프롭스 대신 이렇게하면 키값으로 넘어온다/밑에도 프롭스 안써도 됨 => 구조분해할당(프롭스 전체로 받지 말고 구조분해 할당으로 받는게 편하고 직관적)
  // 밑에 프롭스.d1도 아니고 3파일로 보낼때도 프롭스.d1이 아닌 d1을 d11로 재정의해서 보냈음(변수이름 똑같이 d1로 해서 보내도 상관없음)
  // 03폴더의 프롭스를 사용한 것과 비교해서 봐
  
    return (
      <div className = "w-3/5 h-3/5 flex flex-col justify-center items-center bg-yellow-200 text-yellow-500">
          <p className = "w-3/5 flex justify-start font-bold text-2xl my-5">
            {`${d1} > ${d2}`}
        </p>
          <MyDiv3 d11={d1} d22={d2} d33={d3} />
      </div>
    )
  }
//