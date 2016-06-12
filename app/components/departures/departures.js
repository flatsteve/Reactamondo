'use strict';

import React from 'react';
import DeparturesEntry from '../departure_entry/departures_entry';
import './departures.css';

class Departures extends React.Component {
  render() {
    return (
      <div>
        <h2 className="departures__title">
          Departures from {this.props.stationName}
        </h2>

        <div className="departures__board">
          {this.props.busTimes.map(busDetails => {
            return <DeparturesEntry details={busDetails} key={busDetails.id}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Departures;