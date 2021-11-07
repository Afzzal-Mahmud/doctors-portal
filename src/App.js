import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import Appointment from './Pages/Appointment/Appointment';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
      {/* header components */}
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomeMain}></Route>
        <Route path='/home' component={HomeMain}></Route>
        <PrivateRoute path='/appointment'>
          <Appointment />
        </PrivateRoute>
        <Route path='/login' component={LogIn}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
