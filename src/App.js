import React, {useState, useEffect, Suspense, lazy} from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {observable} from '@chenlevin89/awesome-lib'

import Home from './components/Home';
import Activities from './components/Activities';
import DynamicLoad from  './components/DynamicLoad';
import Navbar from './components/Navbar';
import {activities,createNewActivity,counter} from './state';

import './App.css';
import '@chenlevin89/awesome-lib/dist/index.css'


const Mfe = lazy(() => import('Mfe1/MfeComponent'));


function App() {

  const [state, setState] = useState({counter, activities});

  const callback = (value) => {
    const activity = createNewActivity(value);
    const activities = [...state.activities, activity];
    setState({...state, counter: state.counter + value, activities})
  };

  useEffect(() => {
    observable.register({eventName: 'update_balance', callback});
  });

  useEffect(() => {
    observable.unregister({eventName: 'update_balance', callback});
  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Home counter={state.counter} />
              </Route>
              <Route path="/activities">
                <Activities activities={state.activities} />
              </Route>
              <Route path="/operations">
                <Mfe />
              </Route>
              <Route path="/contact">
                <DynamicLoad path="VueMfe/VueMfeComponent" element="vue-mfe-element" />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}


export default App;
