import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {

    //09 > useState, useEffect 공부의 정수
    //자바스크립트 fetch문법 그냥 저렇게 써
    //인터넷에 url로 데이터 줘 하고 패치로 던져
    //비동기방식으로 내가 딴거하고있는데 쟤가 갔다가 왔다 >> .then에 걸려 >> 응답을 갖고와 , 그게 resp변수에 담겨와(변수명은 아무거나)
    //그거를 .json 하면 응답에 대한 결과를 제이슨형태로
    //비동기방식으로 끝나고나면 .then 
    //제이슨을 한 결과가 데이터로 들어와
    //어떤 오류가 발생하면 캐치에 걸려
    //Fetch에 url만 주면 끝
    //패치하는동안은 비동기방식으로 이루어진다
    //나 갔따왔어! 하고 응답줄때 .then
    //그냥못보니까 제이슨형태로 바꿈
    //응답줄때 .then 응답줄때 .then을
    //then chaining이라고 이야기함
    //온라인에서 갖고와서 json형태로 보는 것
    //data.data 17개 저거만 필요하니까 //data의 data 17개만 필요
    //그걸 저장해서 쓰는게 스테이트변수
    //useState를 줘서 저 17개의 어레이를 요 컴포넌트가 동작하는 동안에 계속 쥐고있을거라는 의미
    //유즈스테이트 훅(구조분해할당으로씀) 을 쓰게되면 반환값(리턴값)이 2개> 첫번째거는 변수 두번째거는 이 변수를 저장하는,세팅하는 함수 > 그렇게 두개
    //그 두개를 각각 원하는 이름으로 받아냄 > 그걸 구조분해할당이라고 함 >  여기서는 tdata, setTdata
    //tdata안에다가 data.data 17개배열을 저장시켜놓음
    //저장시키려하면 저장을 시킬때는 tdata= 이렇게 저장시키는게 아니라 변경을 할 수 있는건 setTdata로 할 수 있다  .then(data => setTdata(data.data)) 이렇게
    //17개 배열을 tdata에 저장해놓겠다라는 것
    //이까지는 공식처럼 외워
    //겟방식으로 가지고올때 이렇게 가지고오면 됨
    //화면에 데이터를 뿌릴때 갖고와야되는데 그걸 백엔드가 API로
    //데이터가바뀌었다, 스테이트의 값이 바뀌었다 > 자동으로 실행되는게 유즈이펙트
    //tdata가 세터에의해 바뀌고나면 useEffect(() => {}, [tdata]) 이걸로 실행시킨다. console.log(tdata)로 확인)


    const getDataFetch = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err))
    }

    const [tdata, setTdata] = useState(); //전체 fetch 데이터(17개배열)
    //대분류(중복제거)//c1은 대분류 카테고리를 나타냄
    const [c1, setC1] = useState(); //tdata에서 추출한 사고유형의 대분류를 중복을 제거하고 가져와서 c1에다가 저장, TrafficNav 컴포넌트로 전달됨
    const [c2, setC2] = useState(); //선택된 중분류
    const [selectionC1, setSelectionC1] = useState();
    const [selectionC2, setSelectionC2] = useState();
    const [detail, setDetail] = useState();
    const [info, setInfo] = useState();

    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`

        console.log(url)

        getDataFetch(url)
    }, []);

    useEffect(() => {
        //시작할때 데이터가없으면 맵을 못하지
        if (!tdata) return;
        //데이터가 여기로 올거니까 여기에 c1을 만들면 됨
        //console.log("tdata = ", tdata)
        let temp = tdata.map(item => item["사고유형_대분류"]);
        temp = new Set(temp);
        //이대로 놔두면 집합이라서 배열로 바꿔줌(전개연산자로)
        temp = [...temp]
        setC1(temp);
        //console.log("tdata temp => ", temp) //콘솔을 여기서 찍어야지 위에 Set으로 중복없앤것포함해서 콘솔이 찍히지
    }, [tdata])

    useEffect(() => {
        if (!tdata) return;
        //console.log("selectionC1", selectionC1)
        let temp = tdata.filter(item => item.사고유형_대분류 === selectionC1).map(item => item.사고유형_중분류);
        setC2(temp);
    }, [selectionC1])

    useEffect(() => {
        if (!tdata) return;
        let temp = tdata.filter(item => item.사고유형_대분류 === selectionC1 && item.사고유형_중분류 === selectionC2)
        setDetail(temp[0]);
    }, [selectionC2])

    useEffect(() => {
        if (!tdata) return;
        console.log("detail =>", detail)
        const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
        //배열이니까 맵가능
        let temp = keyArr.map(k =>
            <div className='flex justify-center mt-5 items-center' key={k}>
                <div className='w-1/2 flex justify-center items-center bg-slate-100'>
                    {k}
                </div>
                <div className = 'w-1/2 flex justify-center items-center font-bold bg-slate-50'>{detail[k]}</div>
                {parseInt(detail[k]).toLocaleString()}
                {/* 배열이니까 대괄호 */}
            </div>)
            setInfo(temp);
            //밑에서 {info}를 쓰려면 info를 이렇게 해줘야지(원리를 이해하고 문법에 익숙해져야)
    }, [detail])

    return (
        <div className='w-full h-full mt-5 flex flex-col justify-start items-center'>
            {c1 && <TrafficNav title="대분류" category={c1} selection={selectionC1} setSelection={setSelectionC1} />}
            {/* c1이 있을때만 */}
            {c2 && <TrafficNav title="중분류" category={c2} selection={selectionC2} setSelection={setSelectionC2} />}
            <div className='w-10/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                {info}
            </div>
        </div>
    )
    //조건부 랜더링,
    //c1은 상태 변수로, 데이터가 존재하면(truthy일 경우) true가 되고,
    //데이터가 없으면(null 또는 undefined) false가 됨. 따라서 c1이 존재하는 경우에만 <TrafficNav> 컴포넌트가 렌더링됨

    //TrafficNav 컴포넌트는 probs로 아래들을 받음
    //title: 컴포넌트의 제목으로 대분류, 중분류
    //category: 대분류, 중분류 카테고리 / c1 상태 변수로부터 받아옴
    //selection: 선택된 항목을 나타내는 상태 변수 selectionC1, selectionC2가 사용됨
    //setSelection: 선택된 항목을 설정하기 위한 콜백 함수 setSelectionC1, setSelectionC2가 사용됨
}
