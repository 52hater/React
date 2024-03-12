//메인헤더 컴포넌트 만든 것(로고 돌아가는거)
//메인헤더 컴포넌트를 만들어서 익스포트 한 후에 App.js에서 임포트

import logo from '../logo.svg';
function MainHeader() {

    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default MainHeader;

//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//        </header>
// jsx문법, className
// jsx문법에서는 카멜표기법따름
//자바스크립트 예약어와 같은 속성명을 사용할 수 없음
//– class 속성은 className, for 속성은 htmlFor
//–속성명은 카멜표기법을 사용