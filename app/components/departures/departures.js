'use strict';

import React from 'react';
import * as tfl from '../../services/tfl';
import { copyToCamelCase } from '../../services/utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DeparturesEntry from '../departure_entry/departures_entry';
import _ from 'lodash';
import { observer } from 'mobx-react';

import './departures.css';
import '../../common/headers.css';

@observer
export default class Departures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      busTimes: [],
      stationName: null
    };
  }

  componentDidMount() {
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

    tfl.getBusTimes(this.props.route.appState.station.id)
      .then(function (data) {
        data.sort((a, b) => { return a.timeToStation - b.timeToStation; });
        this.setState({ busTimes: data, stationName: data[0].stationName });

        // Once bus times are initially loaded connect to live updates
        tfl.conectToHub(this.props.route.appState.station.id, updateDepartures.bind(this));
      }.bind(this))
      .catch(error => { console.warn('Please check connection'); });
  }

  componentWillUnmount() {
    tfl.disconnectFromHub();
  }

  render() {
    return (
      <div>
        <h2 className="header header--light">
          {this.props.route.appState.station.label ?
            `Departures from ${this.props.route.appState.station.label}`
            : 'Loading departures...'}
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