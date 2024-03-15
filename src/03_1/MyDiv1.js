import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  const dname1 = 'div1';
  const dname2 = 'div2';
  const dname3 = 'div3';
  //상위 컴포넌트에서 하위 컴포넌트로 데이터를 내려보내는 것 = 프롭스속성
  //예를들어 dname1을 Mydiv2컴포넌트에 전달하고 싶다
  //이름 아무거나 예를들어 d1={dname1} 내가 사용자정의태그에 속성을 만들어넣음으로서 상위에서 하위로 내려보낼 수 있다 속성값에 넣어서 보낸다
  //받을때는 파라미터로 받는다 (컴포넌트는 함수니까) > MyDiv2에 파라미터를 넣어 줌

  return (
    <>
    <div className = "w-4/5 h-4/5 flex flex-col justify-center items-center bg-lime-200 text-lime-500">
        <p className = "w-4/5 flex justify-start font-bold text-2xl">
        div1 div2
      </p>
      <MyDiv2 d1={dname1} d2={dname2} d3={dname3} />
    </div>
    </>
  )
}
