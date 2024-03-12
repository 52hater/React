import logo from '../logo.svg';
import MyClockTime from './MyClockTime';

function MyClockImages() {
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{width:"200px", height:"300px"}}/>
          <MyClockTime />
        </header>
    );
}
export default MyClockImages;