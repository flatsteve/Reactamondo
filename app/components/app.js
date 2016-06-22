'use strict';

import React from 'react';
import {IndexLink, Link} from 'react-router';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {
          React.cloneElement(this.props.children, ...this.props, { key: undefined, ref: undefined })
        }

        <nav className="nav">
          <IndexLink className="nav__item" activeClassName="nav__item--active" to="/">
            Home
          </IndexLink>
          
          <Link className="nav__item" activeClassName="nav__item--active" to="profile">
            Profile
          </Link>
        </nav>
      </div>
    );
  }
}