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
import Instructor from './Components/Instructors/Instructor';
import Suitable from './Components/Suitables/Suitable';
import Happystudent from './Components/Happystudents/Happystudent';
import Blog from './Components/Blogs/Blog';
import Keysupport from './Components/Keysupport/Keysupport';
import Footers from './Components/Footer/Footers';

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
      <Instructor></Instructor>
      <Suitable></Suitable>
      <Happystudent></Happystudent>
      <Blog></Blog>
      <Keysupport></Keysupport>
      <Footers></Footers>


    </div>
  );
}

export default App;
