'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppState from './app_state';

import Departures from './components/departures/departures';
import Profile from './components/profile/profile';

import './common/main.css';

const appState = new AppState();

// Look at redux provider pattern to avoide passing appState to every route component
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Departures} appState={appState}></IndexRoute>
      <Route path="/profile" component={Profile} appState={appState}></Route>
    </Route>
  </Router>, document.getElementById('app')
);