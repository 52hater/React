import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//.js 생략되어있음 //그런데 App.js, 자바스크립트를 가지고 왔는데 그게 하나의 모듈이고 하나의 컴퍼넌트를 만들어놓고 임포트해서 갖고와서 갖다쓰는데
//아래에 11째줄 보면 태그형식으로 씀, 앱이라는 태그는 표준에 없음 > 사용자정의태그형식 // 슬래시 붙여서 반드시 종료
//import reportWebVitals from './reportWebVitals'; //앱의 성능을 보려고 쓰는 것//근데 막고 안쓴대

const root = ReactDOM.createRoot(document.getElementById('root'));//index.html의 div를 가지고와서
root.render(//루트에다가 렌더(갖다끼운다) 앱을 갖다끼움 //컴퍼넌트는 함수, 컴퍼넌트를 만든다 > 함수는 리턴값이 있지 그 리턴된게(html태그) 여기에 박힘
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//내가 만든 컴퍼넌트를 <App />처럼 쓸거잖음 > 컴퍼넌트는 대문자로 시작, 소문자로 시작하면 일반 html이라 생각
//컴퍼넌트는 내가 만드는 태그인데 대문자로 시작해야 컴퍼넌트로취급(?)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
