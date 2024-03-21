import busan from './images/busan.png'
import market from './images/market.png'
import bank from './images/bank.png'
import fooddata from './fooddata.json'
import { useState } from 'react'

export default function FoodCard({fobj}) {

    const [isClick, setIsClick] = useState();

    const handleIsClick = () => {
        setIsClick(!isClick);
    };
    //false면 안보일거니까 클릭하면 반대로 true로

    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank : 
                 fobj["구분"] === "기초푸드마켓" ? market : busan

    return (
        <div className="w-full flex border 
    rounded hover:bg-gray-100"
    onClick={handleIsClick}>
            <div className="w-1/4 max-w-40 items-center justify-center p-1">
                <img src={fimg} alt='기초푸드뱅크' className='w-full inline-flex M-2' />
            </div>
            <div className="w-3/4 px-5 py-3 flex flex-col justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-700">
                    {fobj["사업장명"]}
                </h1>
                <p className="w-full text-gray-600">
                    {fobj["사업장 소재지"]}
                </p>
                <p className="w-full text-gray-600">
                    {fobj["운영주체명"]}
                </p>
                <p className="w-full text-white bg-slate-500 h-5 text-sm truncate">
                    {isClick && `Tel : ${fobj["연락처(대표번호)"]}, Fax : ${fobj["팩스번호"]}`}
                </p>
                
            </div>
        </div>
    )
}
