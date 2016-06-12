'use strict';

import React from 'react';
import getBusTimes from '../../services/tfl';
import DeparturesEntry from '../departure_entry/departures_entry';
import './departures.css';

class Departures extends React.Component {
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
      <div>
        <h2 className="departures__title">
          Departures from {this.state.stationName}
        </h2>

        <div className="departures__board">
          {this.state.busTimes.map(busDetails => {
            return <DeparturesEntry details={busDetails} key={busDetails.id}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Departures;