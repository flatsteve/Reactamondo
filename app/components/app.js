'use strict';

import React from 'react';
import getBusTimes from '../services/tfl';
import Departures from './departures/departures.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      busTimes: [],
      stationName: 'Loading'
    };
  }

  componentDidMount() {
    this.requestBusTimeds = getBusTimes()
      .then(function (data) {
        data.sort((a, b) => { return a.timeToStation - b.timeToStation; });
        this.setState({ busTimes: data, stationName: data[0].stationName });
      }.bind(this));
  }

  render() {
    return (
      <Departures busTimes={this.state.busTimes} stationName={this.state.stationName}/>
    );
  }
}

export default App;