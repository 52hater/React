import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//.js 생략되어있음 //그런데 App.js, 자바스크립트를 가지고 왔는데 그게 하나의 모듈이고 하나의 컴퍼넌트를 만들어놓고 임포트해서 갖고와서 갖다쓰는데
//아래에 11째줄 보면 태그형식으로 씀, 앱이라는 태그는 표준에 없음 > 사용자정의태그형식 // 슬래시 붙여서 반드시 종료
//import reportWebVitals from './reportWebVitals'; //앱의 성능을 보려고 쓰는 것//근데 막고 안쓴대

const root = ReactDOM.createRoot(document.getElementById('root'));//index.html의 div를 가지고와서//리액트는 가상돔을 쓴다, 가상돔을 하나 만든다
root.render(//루트에다가 렌더(갖다붙인다) 앱을 갖다붙임 //컴퍼넌트는 함수, 컴퍼넌트를 만든다 > 함수는 리턴값이 있지 그 리턴된게(html태그) 여기에 박힘
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//내가 만든 컴퍼넌트를 <App />처럼 쓸거잖음(태그처럼 > 사용자정의 태그) > 컴퍼넌트는 대문자로 시작, 소문자로 시작하면 일반 html이라 생각
//컴퍼넌트는 내가 만드는 태그인데 대문자로 시작해야 컴퍼넌트로취급(?)
//앞으로 만드는 모든 컴퍼넌트는 사용자정의태그형식으로 <App />처럼
//실제 html태그 : 소문자 / 컴퍼넌트 : 대문자로 시작 => 구분해야되기 때문
//컴퍼넌트의 확장자 : .js? .jsx?
//리액트 컴퍼넌트는 함수로 짜야함(함수형 컴퍼넌트), 이제 클래스형 컴퍼넌트는 안씀, 우리는 무조건 함수형컴퍼넌트로 감 > 자바스크립트의 함수임 > 그래서 function으로 시작
//화살표함수로 작성가능
/*const App = () => {
  return();
 } 이런식으로 화살표 함수로 만들어도 됨 */
 // function App()
 //리액트에서의 컴퍼넌트는 반드시 리턴문이 있어야함, 리턴문은 반드시 닫아야함.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
