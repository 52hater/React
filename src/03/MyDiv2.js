import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
    console.log(probs)
  
    return (
      <div className = "w-3/5 h-3/5 flex flex-col justify-center items-center bg-yellow-200 text-yellow-500">
          <p className = "w-3/5 flex justify-start font-bold text-2xl my-5">
            {`${probs.d1} > ${probs.d2}`}
        </p>
          <MyDiv3 d11={probs.d1} d22={probs.d2} d33={probs.d3} />
      </div>
    )
  }
  