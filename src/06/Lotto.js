import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react"

export default function Lotto() {

  const [ballTags, setBallTags] = useState();

  const handleLottoClick = () => {
    let nums = [];

    while (nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(n)) nums.push(n);
    }

    console.log(nums)

    nums.splice(6, 0, '+');

    const tm = nums.map((item, idx) =>
      idx === 6 ? <span key={`sp${item}`}
            className="text-xl font-bold mx-2"> 
            {item} </span>
        : <TailBall n={item} key={`ball${item}`} />
    )

    setBallTags(tm);
  }

  const handleLottoClick2 = () => {
    console.log('handleLottoClick2')
  }

  return (
    <>
      <div className='flex'>
        {ballTags}
      </div>
      <TailButton caption='로또번호생성'
        color='red'
        handleClick={handleLottoClick} />
    </>
  )
}