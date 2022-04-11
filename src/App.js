import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigations/Navigation';
import HeaderTop from './Components/HeaderTop/HeaderTop';
import Futurelearning from './Components/Futurelearnings/Futurelearning';
import Aboutcourse from './Components/Aboutcourses/Aboutcourse';
import Categori from './Components/Categories/Categori';
import Explorecours from './Components/Explorecourse/Explorecours';
import Choose from './Components/Chooseus/Choose';
import Information from './Components/Informations/Information';

function App() {
  return (
    <div className="App">

      <HeaderTop></HeaderTop>
      <Futurelearning></Futurelearning>
      <Aboutcourse></Aboutcourse>
      <Categori></Categori>
      <Explorecours></Explorecours>
      <Choose></Choose>
      <Information></Information>


    </div>
  );
}

export default App;
