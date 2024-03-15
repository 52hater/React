
export default function MyList() {
  return (
    <div className="w-10 flex border rounded max-w-48">
      <div className="flex-col w-1/4">
      <img src={imgUrl} alt="img" />
        <h1 >HTML</h1>
        <p>
          asdsadfasdfsdafsdaf
        </p>
        <p className="w-full flex justify-end mt-5 font-bold items-center">
          <span className="text-xl">💖</span>
          <span className="mx-2">좋아요</span>
        </p>
      </div>
    </div>
  )
}