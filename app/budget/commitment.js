import React from 'react';

class Commitment extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.commitment.name}</h2>
      </div>
    )
  }
}

export default Commitment;