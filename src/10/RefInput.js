import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"

export default function RefInput() {

    const inputRef = useRef();

    const [bts, setBts] = useState([]);

    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        console.log(inputRef.current.value)
        if (inputRef.current.value === '') {
            alert('값을 입력하세요');
            inputRef.current.focus();
            //벨류로 값 가져오고 포커스로 포커스맞춰진다
            return;
            //리턴을 해서 다시 값입력으로 포커스(?)
        }
        setBts([...bts, inputRef.current.value]);
        //handleAdd 함수내에 들어가있어야지
        //이거 앞 뒤 자리바꾸면 뒤로말고 앞으로 들어가짐(inputRef.current.value, ...bts 로 바꾸면)
    }

    //bts배열이 만들어지면 화면에 뿌리는거 만들어줘 useEffect에서

    useEffect(() => {
        inputRef.current.value = '';
        inputRef.current.focus();
        let tm = bts.map((item, idx) =>
            <TailButton caption={item}
                key={`bt${idx}`}
                color="orange" />);
        setTags(tm);
    }, [bts]);


    const handleRemove = () => {
        setBts([]);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <div className="W-11/12 flex flex-col justify-center items-center">
            <div className="w-full">
                <div className="w/1/2 flex justify-center items-center">
                    <input type="text"
                        ref={inputRef}
                        className="bg-gray-50 border 
                    border-gray-300 
                    text-gray-900 
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500 
                    block w-full p-2.5"
                        placeholder="값입력" />
                </div>
                <div className="w/1/2 flex justify-center items-center">
                    <TailButton caption="등록" color="blue" handleClick={handleAdd} />
                    <TailButton caption="취소" color="blue" handleClick={handleRemove} />
                </div>
            </div>
            <div className="w-full border p-5">
                {tags}
            </div>
        </div>
    )
}
