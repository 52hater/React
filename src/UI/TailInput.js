

export default function TailInput({ type, inputRef, ph, handleChange }) {
    return (
        <input type={type}
            ref={inputRef}
            onChange={handleChange}
            //여기가 중요함 여기는 반드시 ref라고 되어있어야하고 지금 inputRef라고 되어있는곳은 알아서 식별하기쉽게
            id="first_name"
            className="bg-gray-50 border 
                    border-gray-300 
                    text-gray-900 
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500 
                    block w-full p-2.5"
            placeholder={ph} />
        // placeholder={ph}는 ""바깥에 써줘야지

    )
}
