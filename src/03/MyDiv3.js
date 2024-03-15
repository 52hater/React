
export default function MyDiv3(probs) {
  
    return (
      <div className = "w-2/5 h-2/5 flex flex-col justify-center items-center items-start bg-green-200 text-green-500">
          <p className = "w-2/5 flex justify-start font-bold text-2xl">
          {`${probs.d11} > ${probs.d22} > ${probs.d33}`}
        </p>
     
      </div>
    )
  }
  