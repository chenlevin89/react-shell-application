import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import '@chenlevin89/awesome-lib/dist/index.css'
import Home from './components/Home';
import Activities from './components/Activities';
import Mfe from 'Mfe1/MfeComponent';
import logo from './assets/module-federation.png';
import React, {useState, useEffect} from 'react';
import {ButtonComponent, observable} from '@chenlevin89/awesome-lib'



function App() {

  const [state, setState] = useState({counter: 1000});
  const callback = (value) => {setState({...state, counter: state.counter + value})};

  useEffect(() => {
    observable.register({eventName: 'update_balance', callback});
  });

  useEffect(() => {
    observable.unregister({eventName: 'update_balance', callback});
  }, [])


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/activities" activeClassName="selected">Activities</NavLink>
          </li>
          <li>
            <NavLink to="/operations" activeClassName="selected">Operations</NavLink>
          </li>
          <img src={logo} height="50px" width="auto" />
        </ul>

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home counter={state.counter} />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/operations">
              <Mfe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
