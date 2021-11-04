import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      {/* header components */}
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/home' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
