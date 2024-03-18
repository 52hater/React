import BoxOfficeData from "./BoxOffice.json"
import { useState } from "react";
import MyMovie from "./MyMovie";

export default function BoxOfficeTb() {

    const [selMv, setSelMv] = useState(0);
    //유즈스테이트의 리턴값이 두개가 오는데 그걸 배열로 받겠다(info, setInfo)

    const handleClick = (i) => {
        console.log(i)
        setSelMv(i);
    }

    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item =>
        <MyMovie rank={item.rank}
            movieNm={item.movieNm}
            salesAmt={item.salesAmt}
            audiCnt={item.audiCnt}
            rankInten={item.rankInten}
            key={item.rank} />
        // 유니크 요소가 랭크라서 키를 랭크로??

    )

return (
    <div className="w-full flex flex-col justify-center items-center">
        <table className="w-4/5 border">
            <thead>
                {/* tr에 클릭을 줘야 그 줄 아무데서나 클릭되지 */}
                <tr className="text-center h-10 bg-slate-700 text-white">
                    <th className="w-10">순위</th>
                    <th>영화명</th>
                    <th className="w-1/5">매출액</th>
                    <th className="w-1/5">관객수</th>
                    <th className="w-20">순위변동</th>
                </tr>
            </thead>
            <tbody>
                {boxList}
                {/* const 박스리스트를 했으니까 함수를 넣어야지 */}
            </tbody>
        </table>
        <div className="w-4/5 h-10 text-center text-bold justify-center items-center bg-slate-800 text-white">
            { selMv === undefined && '영화를 선택하세요'}
            {selMv && `[${selMv.movieCd}] ${selMv.movieNm} - 누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명 누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`}
        </div>
    </div>
)
}
