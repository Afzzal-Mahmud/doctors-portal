import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <Router>
      {/* header components */}
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomeMain}></Route>
        <Route path='/home' component={HomeMain}></Route>
        <Route path='/appointment' component={Appointment}></Route>
      </Switch>
    </Router>
  );
}

export default App;
