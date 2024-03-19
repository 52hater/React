
//내 버튼을 쓰려며 캡션을 써야한다
export default function TailButton({ caption, color, handleClick }) {

  //버튼 컬러값 밑에 함수 두개 한 세트로
  const colorObj = {
    'blue': 'bg-blue-800',
    'red': 'bg-red-800',
    'lime': 'bg-lime-800',
    'orange': 'bg-orange-800'
  }

  const hoverObj = {
    'blue': 'hover:bg-blue-600',
    'red': 'hover:bg-red-600',
    'lime': 'hover:bg-lime-600',
    'orange': 'hover:bg-orange-600'
  }

  const bColor = `px-4 py-2 m-2 rounded-md
                ${hoverObj[color]}
                ${colorObj[color]} text-white`;

  return (
    <button className={bColor}
      onClick={handleClick}>
      {caption}
    </button>
  )
}
