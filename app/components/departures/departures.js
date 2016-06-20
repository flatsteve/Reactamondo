'use strict';

import React from 'react';
import * as tfl from '../../services/tfl';
import { copyToCamelCase } from '../../services/utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DeparturesEntry from '../departure_entry/departures_entry';
import _ from 'lodash';
import './departures.css';
import '../../common/headers.css';

export default class Departures extends React.Component {
  constructor() {
    super();

    this.state = {
      busTimes: [],
      stationName: null
    };
  }

  componentDidMount() {
    tfl.conectToHub(updateDepartures.bind(this));

    function updateDepartures(data) {
      let casedUpatedBusData = copyToCamelCase(data);
      let busTimesCopy = _.cloneDeep(this.state.busTimes);
      let updatedBusTimes = _.unionBy(casedUpatedBusData, busTimesCopy, 'id');
      updatedBusTimes.sort((a, b) => { return a.timeToStation - b.timeToStation; });
      updatedBusTimes = updatedBusTimes.filter(busInfo => {
        return busInfo.timeToStation > 0;
      });

      this.setState({ busTimes: updatedBusTimes });
    };

    tfl.getBusTimes()
      .then(function (data) {
        data.sort((a, b) => { return a.timeToStation - b.timeToStation; });
        this.setState({ busTimes: data, stationName: data[0].stationName });
      }.bind(this))
      .catch(error => { console.warn('Please check connection'); });
  }

  componentWillUnmount() {
    console.log('unmounting');
    tfl.disconnectFromHub();
  }

  render() {
    return (
      <div>
        <h2 className="header header--light">
          {this.state.stationName ? `Departures from ${this.state.stationName}` : 'Loading departures...'}
        </h2>

        {this.state.busTimes.length ?
          (<div className="departures__board">
              <ReactCSSTransitionGroup transitionName="fade-in" transitionAppear={true} transitionAppearTimeout={300}
                transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {this.state.busTimes.map((busDetails, index) => {
                  return <DeparturesEntry details={busDetails} key={index}/>;
                }) }
              </ReactCSSTransitionGroup>
            </div>)
          : 'Loading...'}
      </div>
    );
  }
}