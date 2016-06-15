'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Departures from './components/departures/departures';
import Profile from './components/profile/profile';

import './common/main.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Departures}></IndexRoute>
      <Route path="/profile" component={Profile}></Route>
    </Route>
  </Router>, document.getElementById('app')
);