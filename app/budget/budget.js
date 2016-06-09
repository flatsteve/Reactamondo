import React from 'react';
import Commitment from './commitment';
import './budget.css'

class Budget extends React.Component {
  render() {
    let total = 0;

    return (
      <div className="budget">
        { this.props.commitments.map((commitment) => {
            total += commitment.amount;
            return <Commitment commitment={commitment} key={commitment.code}/>
          })
        }

        <h4>Budget total: {total}</h4> 
      </div>
    )
  }
}

export default Budget;