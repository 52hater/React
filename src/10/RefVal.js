import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react";

export default function RefVal() {

    let cnt = 0; //컴포넌트변수
    const [stCnt, setStCnt] = useState(0); //state변수
    const refCnt = useRef(0); //ref 변수

    const handleLocal = () => {
        cnt = cnt + 1;
        console.log('cnt = , ', cnt);

    }

    const handleState = () => {
        setStCnt(stCnt + 1);

    }

    const handleRef = () => {
        // refCnt = refCnt + 1; < ref변수는 이렇게 쓰면 오류남 -> 커런트를 달고다녀야함
        refCnt.current = refCnt.current + 1;
        console.log("refCnt = ", refCnt)
        //콘솔찍어보면 자기는 안올라감, 화면에 랜더링 일어날떄 화면에 반영 (스테이트변수를 찍으면 화면에 랜더링 일어나니까 올라감)
        //ref변수버튼을 클릭해도 안올라가는데 스테이트변수버튼을 클릭해서 화면랜더링이 일어나면 그때 아까 클릭한만큼 올라감
        //매번 랜더링이 안일어나도 될 때 ref변수를 쓴다
        //보통 폼태그의 값을 가지고 올 때 주로 씀
        //스테이트 변수처럼 랜더링이 일어나는 장치로 쓰는게 아님
    }

    useEffect(() => {
        console.log("stCnt = ", stCnt);
    } , [stCnt]);

    return (
        <div className='w-10/12 text-center grid grid-cols-3 gap-4'>
            <div>
                컴포넌트 변수(지역변수) : {cnt}
            </div>
            <div>
                State 변수 : {stCnt}
            </div>
            <div>
                Ref 변수 : {refCnt.current}
            </div>
            <div>
                <TailButton caption="컴포넌트 변수" color="blue" handleClick={handleLocal} />
                {/* 전달되는 값이 있으면 콜백함수형식, 전달되는 값이 없으면 함수이름만 (handleLocal() 처럼 쓰면 안됨) */}
            </div>
            <div>
                <TailButton caption="State 변수" color="blue" handleClick={handleState} />
            </div>
            <div>
                <TailButton caption="Ref 변수" color="blue" handleClick={handleRef} />
            </div>
        </div>
    )
}
