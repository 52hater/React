import { useState } from "react";
import TailButton from "../UI/TailButton"
import FoodCard from "./FoodCard";
import fooddata from './fooddata.json'

export default function FoodCardMain() {

const [cards, setCards] = useState();

  const handleList = (citem) => {
    const tm = fooddata.filter(item => item["운영주체 분류"] === citem)
      .map(item => 
      <FoodCard fobj={item} key={item["사업장명"]} />)
  setCards(tm);
}

let c1 = fooddata.map(item => item["운영주체 분류"]);
//set으로 중복제거
c1 = new Set(c1)
//콘솔찍어보면 중복되는거 없애고 구분 3개만 남는 것을 볼 수 있음
console.log(c1)
//셋을 그대로 두면 맵이나 필터를 쓸 수 없다 > 집합을 array로 바꾼다
//전개연산자 ...
c1 = [...c1];

const c1Bts = c1.map(item =>
  //아이템을 줘야되니까 콜백함수형태로 () =>
  <TailButton caption = {item} color="blue" key={item} handleClick={()=>handleList(item)}/>);

  return (
    <>
    <div className='w-full h-full bg-blue-50 flex flex-col justify-start items-center'>
    <div className='w-full bg-blue-100 p-5 flex justify-center items-center'>
     {c1Bts}
    </div>
    <div className = "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {cards}
    </div>
    </div>
    </>
  )
}
