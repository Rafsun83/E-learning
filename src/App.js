import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigations/Navigation';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import Admin from './Components/AdminsPortal/Admin';
import Usersignup from './Components/UserSignup/Usersignup';
import Register from './Components/Registers/Register';
import {

  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';




function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/usersignup">
              <Usersignup></Usersignup>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
