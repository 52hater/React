import BoxOfficeData from "./BoxOffice.json";
import { useState } from "react";
import BoxOfficeTbody from "../05_pro_1/BoxOfficeTbody";
import BoxOfficeThead from "../05_pro_1/BoxOfficeThead";
import BoxOfficeInfo from "../05_pro_1/BoxOfficeInfo";

export default function BoxOfficeTb() {
  //영화 목록 json 에서 가져오기
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList ;
  console.log("boxList=", boxList)

  //state 변수
  const [selMv, setSelMv] = useState();
  
  return (
    <div className="w-full flex flex-col 
                    justify-center items-center">
      <table className="w-4/5 border">
          <BoxOfficeThead />
          <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv}/>
          {/* 박스리스트를 이런식으로 넘겨줌 */}
          {/* 여기는 tbody였던 자리 > 그걸 따로 컴포넌트 BoxOfficeTbody로 만들어서 뺐다 */}
          {/* 10개가 들어감 */}
        {/* <tfoot>
          <tr>
            <td colSpan={5} className="bg-slate-200">footer</td>
          </tr>
        </tfoot> */}
      </table>
      <BoxOfficeInfo selMv={selMv}/>
    </div>
  )
}