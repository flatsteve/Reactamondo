'use strict';

import React from 'react';
import getBusTimes from '../services/tfl';
import DeparturesEntry from './departures_entry';

class Departures extends React.Component {
  constructor() {
    super();

    this.state = {
      busTimes: []
    };
  }

  componentDidMount() {
    this.requestBusTimeds = getBusTimes()
      .then(function (data) {
        data.sort((a, b) => { return a.timeToStation - b.timeToStation; });
        this.setState({ busTimes: data });
      }.bind(this));
  }

  render() {
    return (
      <div>
        {this.state.busTimes.map(busDetails => {
          return <DeparturesEntry details={busDetails} key={busDetails.id}/>;
        })}
      </div>
    );
  }
}

export default Departures;