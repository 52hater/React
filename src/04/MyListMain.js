import Html from "./MyList.js"

export default function MyListMain() {
  return (
    <div className = "w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <MyList title='1' imgUrl='./images/html.png' content='test1' />
        {/* <MyList title='2' imgUrl='./images/css.png' content='test2' />
        <MyList title='3' imgUrl='./images/js.png' content='test3' />
        <MyList title='4' imgUrl='./images/react.png' content='test4' /> */}
    </div>
  )
}
