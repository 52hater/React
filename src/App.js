// import HelloCss from './02/HelloCss'
import { FaHome } from "react-icons/fa";
import BoxOfficeTb from "./05/BoxOfficeTb";
//import MyDiv1 from './03/MyDiv1';
// import MyListMain from "./04_pro/MyListMain";

export default function App() {
  return (
    <div className='flex flex-col
                     w-full max-w-screen-xl
                     h-screen
                     mx-auto
                     overscroll-y-auto
                     '>
      <header className='flex justify-between
                        h-20 p-10
                        text-xl font-bold text-slate-200
                        bg-slate-800
                      '>
        <div>리액트 실습</div>
        <div><FaHome className='text-2xl text-slate-200' /></div>
      </header>
      <main className='grow flex flex-col w-full
                      justify-center items-center'>
        {/* <MyListMain /> */}
        <BoxOfficeTb />
      </main>
      <footer className='flex justify-center items-center
                        h-20 bg-slate-800
                        text-base text-white'>
        Copyright © 2024 pnu.co.,Ltd. All rights reserved.
      </footer>
    </div>
  )
}
