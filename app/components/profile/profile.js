'use strict';

import React from 'react';
import '../../common/buttons.css';
import '../../common/forms.css';
import './profile.css';

export default class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      station: null,
      options: [
        { label: 'Select your station', value: '' },
        { label: 'Bus: Nat. Maritime Museum', value: 'bus' },
        { label: 'DLR: Greenwich', value: 'dlr' },
        { label: 'Train: Greenwich', value: 'train' },
      ]
    };
  }

  change(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <h2 className="header header--light">
          Profile
        </h2>

        <div className="profile">
          <select className="select" defaultValue="" onChange={this.change.bind(this) }>
            {this.state.options.map((option, index) => {
              return <option value={option.value} key={index}>{option.label}</option>;
            }) }
          </select>

          <button className="button profile__save">
            Save changes
          </button>
        </div>
      </div>
    );
  }
}