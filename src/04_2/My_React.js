export default function My_React() {
    return (
      <div className="flex items-center justify-center bg-white p-5 m-5 rounded">
        <div className="w-4/5">
          <img src="./images/react.png" a="react" className="p-1 m-1" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex text-2xl">
            <h1>React</h1>
          </div>
          <p className="w-3/4 m-1">
            React
          </p>
          <p className="flex justify-end">
            <span className="m-1">❤️</span>
            <span className="m-1">좋아요</span>
            <span className="m-1">0</span>
          </p>
        </div>
      </div>
    );
  }