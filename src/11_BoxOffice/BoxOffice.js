import { useState, useEffect, useRef } from "react";
import BoxOfficeTbody from "../05_pro_1/BoxOfficeTbody";
import BoxOfficeThead from "../05_pro_1/BoxOfficeThead";
import BoxOfficeInfo from "../05_pro_1/BoxOfficeInfo";
import TailInput from "../UI/TailInput";
import BoxOfficeData from "../05_pro/BoxOfficeData.json"

export default function BoxOffice() {

    //날짜를 바꿀때마다 실행돼야하니까 스테이트함수, 변수는 박스리스트
    const [boxList, setBoxList] = useState();
    const [trs, setTrs] = useState();
    const boxRef = useRef();
    //박스리스트가 바뀔때마다 useEffect
    //화면을 이떄 그려줘야
    useEffect(() => {
        
    }, [boxList]);

    //boxoffice 데이터 fetch
    //getData 함수 이거 자바에서 메소드랑 똑같은거지
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`;
        console.log(url);
        fetch(url)
        .then(resp => resp.json)//이 응답된걸 내가 보기위해서 json으로 만들어(그것도 비동기로) > json이 만들어지고나면 또 .then에 걸리는거지
        .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList)) //여기서도 변수이름 data나 뭐나 아무거나 하는거지 변수이름이니까
        .catch (err => console.log(err))
        //이렇게해주면 던져놓고 다른거하다가 데이터가 날라오면 .then에 걸림 (비동기함수) (만약에 동기함수라면 답이올때까지 기다리면서 계속 로딩하면서 하나하나 로딩(옛날방식))
        //비동기방식은 날아오면 그때로딩
    }

    const handleSelDate = () => {
        console.log(boxRef.current.value.replaceAll('-', ''));
        // 날짜에 - 있으면 안돼서 '-'를 ''로 없어지게
        getData(boxRef.current.value.replaceAll('-', ''));
        //여기 겟데이터에 호출할때 파라미터를 날짜를 줘야함
        //내나 자바 메소드호출에 날짜값을 줘서 함수에서 파라미터 dt를 이용해 날짜값 boxRef.current.value.replaceAll('-', '')를 받는 것
        //위에 함수의 dt는 뭘가져올지는 모르는거고 '내가 정한' 파라미터값
        //Fetch로 url주소에서 데이터를 가지고 오는 것 Fetch함수는 url주소를 주면 거기 가서 데이터가지고오는 자바스크립트의 함수
        //함수에서는 들어오는게 파라미터 나가는게 리턴이지
        //리액트든 자바든 파이썬이든 똑같아
    }
   
    return (
        <div className="w-full flex flex-col 
                    justify-center items-center">
            <div className="w-4/5 flex justify-end items-center">
                <div>
                    <span className="text-sm mx-5 font-bold">날짜 선택 : </span> 
                <TailInput type="date" inputRef={boxRef} handleChange={handleSelDate} ph="" />
                {/* 체인지가 걸려있으니까 날짜선택하면 ref변수에 있겠지 */}
                </div>
            </div>
        </div>
    )
}