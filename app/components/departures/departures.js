'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
          <ReactCSSTransitionGroup transitionName="fade-in" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.props.busTimes.map((busDetails, index) => {
              return <DeparturesEntry details={busDetails} key={index}/>;
            })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Departures;