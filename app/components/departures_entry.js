'use strict';

import React from 'react';
import { convertToMinutes } from '../services/utils';
import './departures_entry.css';

class DeparturesEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="departures-entry">
        <h3>{this.props.details.lineId}</h3>: 
        <span>Expected: { convertToMinutes(this.props.details.timeToStation) }</span>
        <span>Towards: {this.props.details.destinationName}</span>
      </div>
    );
  }
}

export default DeparturesEntry;
