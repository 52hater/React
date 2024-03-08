import logo from './logo.svg';//이미지도 모듈처럼 갖고옴 리소스도 저렇게 갖고옴
import './App.css';//css도 리소스를 가지고옴

function App() {//자바스크립트 펑션 펑션명:앱 ()파라미터받을 수 있고 {}코드짜겠지 /
  return (//우리가 알고있는 html태그들을 조합해서 뭉탱이로 보내줌 앱js>인덱스js>인덱스html로??
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            이왕훈
          </p>
        </header>
      </div>
    </div>
  );//부모태그는 한개, 자식태그는 상관없음 > div를 하나더 만들면 오류나는데 부모 div안에 div많이 만드는건 상관없음///프레그먼트<>태그 못알아들음
}

export default App;
