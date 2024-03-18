import { FaArrowTurnUp } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";

export default function MyMovie ({rank, movieNm, salesAmt, audiCnt, rankInten}) {
    //중괄호 좀 빼먹지마
  return (
    <div>
       <tr className = "h-10 p-1 hover:bg-slate-100 hover:font-bold" onClick={() => {handleClick(item)}}>
                    <td className = "text-center"><span className = "inline-flex w-11/12 bg-slate-400 text-black text-bold p-1 rounded-lg justify-center items-center">{rank}</span></td>
                    <td>{movieNm}</td>
                    <td className = "text-right">{parseInt(salesAmt).toLocaleString()}원</td>
                    <td className = "text-right">{parseInt(audiCnt).toLocaleString()}명</td>
                    <td className = "flex justify-center text-center items-center">{parseInt(rankInten) === 0? <CgLoadbar /> : parseInt(rankInten) > 0 ?  <FaArrowTurnUp /> : <FaArrowTurnDown />}
                    {parseInt(rankInten) !== 0 && Math.abs(rankInten)}</td>
            </tr>
    </div>
  )
}
