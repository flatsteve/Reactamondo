'use strict';

import React from 'react';
import { convertToMinutes } from '../../services/utils';
import './departures_entry.css';

class DeparturesEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="departures-entry">
        <h2 className="departures-entry__number">
          {this.props.details.lineId}
        </h2>
        <h3>{this.props.details.destinationName}</h3>
        <h3 className="departures-entry__arrival">
          Expected: { convertToMinutes(this.props.details.timeToStation) }
        </h3>
      </div>
    );
  }
}

export default DeparturesEntry;
