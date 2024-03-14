import logo from "../logo.svg"

export default function HelloCssImage() {
    return (
        <div>
            <header>
                <img className="imglogo" src={logo} alt="logo" style={{ width: "600px", height: "600px" }} />
                <img className="eee" src="./eee" alt="eee" />
            </header>
        </div>
    )
}

//리턴문안에 이미지 끝에 반드시 / 종료태그
