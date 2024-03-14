import './Hello.css'

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1; //이 변수 n은 중괄호로 써야됨(헬로뒤에) // 헬로뒤에 그냥 n 쓰면 그냥 글자일 뿐

    const st1 = {//객체로 만들어서 써야함 오브젝트로(인라인 스타일?스타일시트? (?)) // 이걸 헬로에 적용(아래)
        backgroundColor: "darkblue",//오브젝트니까 세미콜론 아니고 , //카멜표기법으로 써야 함
        color: "white"
    }

    let  s = ''; //아무것도 안썼다>문자열
    if (n % 2 === 0) s = "짝수";
    else s = "홀수"///이렇게 말고 삼항연산자로 {n % 2 === 0 ? "짝수" : "홀수"} (===는 데이터 타입까지 고려) //조건부랜더링 삼항연산 //짝수면 하트

    let x;

    const currentTime = new Date(); //데이트객체를 하나 만듦 //자바스크립트 date객체 구글링
    

    const st2 = {
        color: "red"
    }

    const st3 = {
        color: "blue"
    }

    return (
        <h1>
            <span style = {st1}>Hello</span>
            {/* 한자리 수 앞에 0을 붙이는 것, 조건문을 {n}앞에  */}
            {/* {n<10 ? `0${n}` : n} << 31라인 조건문을 삼항연산자로 이렇게 가능*/}
            <span style = {{display : "inline-flex", margin:"10px"}}>
                {n<10 && "0"}
                {n}
                </span>
            {s}
            {n % 2 === 0 ? <span style = {st2}>" even"</span>: <span style = {st3}>"  odd"</span>}
            {n % 2 === 0
            ? <span style = {{color:"pink"}}>짝수</span>
            : <span style = {{color:"skyblue"}}>홀수</span>
            }
            {n % 2 === 0 && "💕"}
            {n % 2 !== 0 && "💖"}
            <p>{x || "x는 아직 undefinded 입니다."}</p>
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
        </h1>
    );
}
//13라인 안쪽중괄호 : 오브젝트 기호
//짝수홀수 even odd 글자색 바꾼거 : 삼항연산자 내부에 span태그쓰고, 1.even odd : 따로 함수를 만들어서 2.짝수 홀수 : 오브젝트로
export default Hello;

//컴포넌트 만드는 법 숙지, 리액트 첫시간부터 마지막까지 계속 가지고 가야함
//리턴문에는 html태그가 들어가야함
//기본구조 숙달

/*function 함수명() { //함수명은 대문자로 시작, 카멜표기법(일반태그와 구분짓기 위함)
    return( //리턴은 한개만
        
        );
}

export default 함수명;

해당 함수를 import 해온 곳에서는 반드시 리턴문을 닫아야함 <함수명 /> 이렇게
*/

//리액트 컴포넌트의 리턴문은 JSX문법을 사용
// jsx문법, className
// jsx문법에서는 카멜표기법따름
//자바스크립트 예약어와 같은 속성명을 사용할 수 없음
//– class 속성은 className, for 속성은 htmlFor
//–속성명은 카멜표기법을 사용

//JSX문법에서 스타일 쓰는 법 세가지
//1.스타일시트를 따로 만듦 2.객체로 만들어서 오브젝트로 3.