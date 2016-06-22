import React from 'react';
import '../../common/buttons.css';
import '../../common/forms.css';
import './profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { id: '490006196F', label: 'Nat. Maritime Museum', type: 'bus' },
        { id: '490007513H', label: 'Greenwich High Road', type: 'bus' }
      ]
    };
  }

  change(event) {
    let stationId = event.target.value;
    this.props.route.appState.station = this.state.options.find(station => {
      return station.id === stationId;
    });
  }

  render() {
    return (
      <div>
        <h2 className="header header--light">
          Profile
        </h2>

        <div className="profile">
          <select className="select"
            defaultValue={this.props.route.appState.station.id} onChange={this.change.bind(this) }>
            {this.state.options.map((option, index) => {
              return <option value={option.id} key={index}>{option.label}</option>;
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