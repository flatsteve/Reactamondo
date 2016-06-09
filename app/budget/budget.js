import React from 'react';
import Commitment from './commitment';

class Budget extends React.Component {
  render() {
    let total = 0;

    return (
      <div>
        { this.props.commitments.map((commitment) => {
            total += commitment.amount;
            return <Commitment commitment={commitment} key={commitment.code}/>
          })
        }

        <h1>Budget total: {total}</h1> 
      </div>
    )
  }
}

export default Budget;