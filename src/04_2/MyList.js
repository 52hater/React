
import My_React from './My_React.js'
import My_Html from './My_Html.js'
import My_Css from './My_Css.js'
import My_Js from './My_Js.js'
import listData from "./MyListData.json";

export default function MyList() {
  console.log(listData)

  const myItems = listData.map(item =>
    <MyList title={item.title} imgUrl={item.imgUrl} content={item.content}/>
  );
  //json파일에서 쉼표넣고 추가하면 요소를 가지고와서 똑같이 만듦
  //아이템이 오브젝트로 들어있으니까 하나씩 낱개로 가지고 와서 쓸 수 있음
  //prob쓰면 데이터를 내려줘야되잖아
  //마이리스트에 컨텐트가 있어야되잖아
  //그거는 배열안의 데이터를 집어넣은거잖아
  //이미지 유알엘 타이틀 등등 > 그 값을 가지고 프롭스로 전달해 준 것
  //아이템은 맵의 '요소'
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 m-10 bg-slate-100">
        <My_Html />
        <My_Css />
        <My_Js />
        <My_React />
    </div>
  )
}