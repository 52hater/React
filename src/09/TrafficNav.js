import TailButton from "../UI/TailButton"

export default function TrafficNav({title, category, selection, setSelection}) {

    const handleBtClick = (item) => {
        setSelection(item);
    }

    const bts = category.map(item => //카테고리 개수만큼 맵을돌면서 버튼을 만든다
        <TailButton caption={item} color={item === selection ? "red" : "blue"} handleClick={()=>handleBtClick(item)} />//지금 현재 아이템이 클릭된거란말
        );

  return (
    <>
    <div className='w-11/12 flex justify-between items-center'>
      <h1 className='font-bold'>사고유형 : {title}</h1>
    </div>
    <div>
        {bts}
    </div>
    </>
  )
}
