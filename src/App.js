import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import Appointment from './Pages/Appointment/Appointment';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      {/* header components */}
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomeMain}></Route>
        <Route path='/home' component={HomeMain}></Route>
        <Route path='/appointment' component={Appointment}></Route>
        <Route path='/login' component={LogIn}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;
