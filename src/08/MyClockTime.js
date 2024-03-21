

// const currentTime = new Date();

// function MyClockTime() {
//     return(
//         <>{currentTime.toLocaleTimeString()}</>
//     );
// }
// export default MyClockTime;

// import React, { useState, useEffect } from 'react';

// function MyClockTime() {
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000); // 1초마다 시간을 업데이트

//         return () => {
//             clearInterval(timer);
//         };
//     }, []); // 컴포넌트가 마운트될 때만 실행되도록 []를 빈 배열로 전달

//     return (
//         <>{currentTime.toLocaleTimeString()}</>
//     );
// }

// export default MyClockTime;

//setInterval 중단시키려면 clearInterval

import React, { useState, useEffect } from 'react';

function MyClockTime() {
    const [currentTime, setCurrentTime] = useState();
    const [tm, setTm] = useState(0);

    //useEffect()함수의 첫번째인수는 콜백함수, 인수가 없는경우는 바뀔때마다 찍음
    //대괄호가되면 무조건 한번실행 콘솔로 확인해보면 언디파인드로 한번 찍힘
    //근데 유즈스테이트에 (0)가되면 tm이 바뀔때마다 찍힘
    //초기화됐을때도 tm이 바뀌었다고 인식한다는 것
    //실제로 시간가게하는건 교수님코드를 봐 그냥
    //이걸보고 복습하면서 교수님코드 다운받아서 봐
    
    //얘는 컴포넌트가 생성될때 최초한번 실행
    //컴포넌트 내에서 딱 한번만 쓰고싶을떄  []안에 아무것도 없는것
    useEffect(()=>{
        console.log("[] => ", currentTime, tm)
        setTm(tm + 1);
    }, []);

    //얘는 tm변수가 바뀔 때 마다 실행
    //뭔가 바뀌었을때마다 실행하고싶을때 내가 호출하는게 아니라 useEffect를 써서 이렇게 처리[tm] //tm은 확인용으로 만든 변수
    useEffect(() => {
        console.log("[tm] => ", currentTime, tm)
    } , [tm])
    
    //얘는앞에 currentTime변수할당될때, 뒤에 변수가 할당될때 무조건 실행
    //랜더링이 일어날때마다 실행
    //뒤에 [] 없는거
    useEffect(()=>{
        console.log("[] 없는 경우 => ", currentTime, tm)
    })

    //근데 시간을 중지시키려면 클리어 인터벌 해야됨
    //셋 인터벌을 const t = setInterval(() => ~~~
    //밑에 리턴 클리어인터벌(t) 하면 중지
    //리턴을 할 때 클리어를 시킨다
    //잡고있다가 날려버림
    //클리어인터벌 리턴할때도 콜백함수로 써야 함
    //return() => {clearInterval(t)}

    return (
        <h1 className = "font-bold text-2xl">
        {/* 현재 시각 : {currentTime.toLocaleTimeString()} */}
        </h1>
    );
}

export default MyClockTime;