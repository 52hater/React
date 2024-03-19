
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTbody({boxList, setSelMv}) {

    const handleClick = (mv) => {
      console.log(mv)
      //selMv=mx; 이런거 안됨/ 할당연산자로 state 변수 변경 불가, 세터로(업데이트 함수 변경)
      setSelMv(mv);
    }

    const trs_body = boxList.map( item =>
     <tr key={item.movieCd}
                    onClick={() => {handleClick(item)}}
                    className="h-10 p-2 
                               hover:bg-blue-100 hover:font-bold">
                  <td className="text-center">
                    <span className=" inline-flex w-3/5
                                      p-1
                                      justify-center items-center
                                      bg-blue-900 text-white
                                      text-sm">
                      {item.rank}
                    </span>
                  </td>
                  <td>
                    {item.movieNm}
                  </td>
                  <td className="text-right">
                    {parseInt(item.salesAmt).toLocaleString()}원
                  </td>
                  <td className="text-right">
                    {parseInt(item.audiAcc).toLocaleString()}명
                  </td>
                  <td className="pt-3 flex justify-center items-center">
                    {parseInt(item.rankInten) === 0 ? <CgLoadbar />
                        : parseInt(item.rankInten) > 0 ? <FaArrowUp className="text-red-600"/>
                          : <FaArrowDown className="text-blue-600"/>
                      }
                     {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)} 
                     </td>
                </tr>
     );

  return (
    <tbody>
        {trs_body}
    </tbody>
    //div가 아니라 tbody가 되어야 할 부분을 따로 컴포넌트 만들어서 뺀 것이니까 tbody
  )
}
