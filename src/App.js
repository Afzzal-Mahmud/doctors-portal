import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import Services from './Pages/ServicesMain/Services/Services';

function App() {
  return (
    <Router>
      {/* header components */}
      <Header></Header>
      <Switch>
        <Route path='/' component={HomeMain}></Route>
        <Route path='/home' component={HomeMain}></Route>
        <Route path='/services' component={Services}></Route>
      </Switch>
    </Router>
  );
}

export default App;
