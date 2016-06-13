'use strict';

import React from 'react';
import { getBusTimes, conectToHub } from '../services/tfl';
import { copyToCamelCase } from '../services/utils';
import Departures from './departures/departures.js';
import _ from 'lodash';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      busTimes: [],
      stationName: 'Loading'
    };
  }

  componentDidMount() {
    conectToHub(updateDepartures.bind(this));

    function updateDepartures(data) {
      let casedUpatedBusData = copyToCamelCase(data);
      let busTimesCopy = _.cloneDeep(this.state.busTimes);
      let updatedBusTimes = _.unionBy(casedUpatedBusData, busTimesCopy, 'id');
      updatedBusTimes.sort((a, b) => { return a.timeToStation - b.timeToStation; });
      updatedBusTimes = updatedBusTimes.filter(busInfo => {
        return busInfo.timeToStation > 0;
      });

      console.log(updatedBusTimes[0]);
      this.setState({ busTimes: updatedBusTimes });
    };

    getBusTimes()
      .then(function (data) {
        data.sort((a, b) => { return a.timeToStation - b.timeToStation; });
        this.setState({ busTimes: data, stationName: data[0].stationName });
      }.bind(this));
  }

  render() {
    return (
      <div>
        {(
          this.state.busTimes.length ?
            <Departures busTimes={this.state.busTimes} stationName={this.state.stationName}/>
            : <h2 className="departures__title">Loading bus times...</h2>
        )}
      </div>
    );
  }
}

export default App;