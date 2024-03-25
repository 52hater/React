// import HelloCss from './02/HelloCss'
import { FaHome } from "react-icons/fa";
// import BoxOfficeTb from "./05_pro/BoxOfficeTb";
// import BoxOfficeTbody from "./05_pro_1/BoxOfficeTbody";
//import MyDiv1 from './03/MyDiv1';
// import MyListMain from "./04_pro/MyListMain";
//import Lotto from "./06/Lotto";
//import FoodCardMain from "./07/FoodCardMain";
//import MyClock from "./08/MyClock"
//import TrafficMain from "./09/TrafficMain";
//import RefVal from "./10/RefVal";
//import RefInput from "./10/RefInput";
import BoxOffice from "./11_BoxOffice/BoxOffice";

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
        {/* <BoxOfficeTb /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        {/* <TrafficMain /> */}
        {/* <RefVal /> */}
        {/* <RefInput /> */}
        <BoxOffice />
        
      </main>
      <footer className='flex justify-center items-center
                        h-20 bg-slate-800
                        text-base text-white'>
        Copyright © 2024 pnu.co.,Ltd. All rights reserved.
      </footer>
    </div>
  )
}
