import React from 'react';
import Commitment from './commitment';

class Budget extends React.Component {
  render() {
    return (
      <div>
        { this.props.commitments.map((commitment) => {
          return <Commitment commitment={commitment} key={commitment.code}/>
        }) }
      </div>
    )
  }
}

export default Budget;