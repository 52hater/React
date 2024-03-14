//rfc는 펑션으로 짜주고 //rfac는 화살표함수로 짜 줌

import HelloCssImage from "./HelloCssImage";
import './HelloCss.css'
import HelloWhite from "./HelloWhite";
import HelloRed from "./HelloRed"

export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey)
  return (
    <div className="hellomain">
       <HelloCssImage />
       <HelloWhite />
       <HelloRed />
    </div>

  )
}
