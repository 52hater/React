import { FaHeart } from "react-icons/fa";
import { useState } from "react";
//변경을 감지할 수 있는 장치를 만들어야 됨
//좋아요 누를때마다 증가되는 상태변수를 하나 만들어 > 스테이트변수라고 하자일단 그게 더 와닿는대

export default function MyList({ title, imgUrl, content }) {
    //지역변수
    let cnt = 0;

    //state 변수
    //개중요한 훅 스테이트변수
    //구조분해할당으로 써야함, 대괄호(배열)
    //여기서 변수명은 아무거나 써도됨(stCnt), 대신에 형식은 반드시 대괄호(배열) 안에 첫번째는 변수명 쉼표하고 두번째는 변수를 바꾸는함수 세터명 셋+변수이름으로 그냥 그렇게 써
    const [stCnt, setStCnt] = useState(0);
    //훅(useState()을 호출, 이제 리액트가 쥐고있다 > 바꾸는것도 리액트가 바꿔줌 이제
    //초깃값은 useState()괄호안에 줘야함

    const handleLike = (t) => {
        console.log('handleLike' + t);
        cnt = cnt + 1;
        console.log(`cnt = ${cnt}`)
        setStCnt(stCnt + 1);
        //이렇게 세터함수로, 이제 cnt말고 stCnt로 바꾸러 가야지(44라인)
    }
    //애드이벤트리스너 대신에 온클릭함수로 해도 됨

    return (
        <div className="w-full flex border 
                      rounded hover:bg-gray-100">
            <div className="w-1/4 max-w-40">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="w-3/4 px-5 py-3">
                <h1 className="text-2xl font-bold
                         text-gray-700">
                    {title}
                </h1>
                <p className="w-full text-gray-600">
                    {content}
                </p>
                <p className="w-full flex justify-end items-center
                        mt-5 font-bold">
                    <span className="text-xl" onClick={() => { handleLike(title) }}><FaHeart className="text-red-500 hover:text-red-300" /></span>
                    <span className="mx-2">좋아요</span>
                    <span>{stCnt}</span>
                </p>
            </div>
        </div>
    )
}