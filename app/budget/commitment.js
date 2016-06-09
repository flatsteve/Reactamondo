import React from 'react';

class Commitment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: props.commitment.amount
    }
  }

  updateAmount(evt) {
    this.setState({ amount: evt.target.value });
  }

  render() {
    return (
      <div>
        <h4>{this.props.commitment.name}: {this.state.amount}</h4>
        <input type="number" 
               value={this.state.amount}
               onChange={this.updateAmount.bind(this)}/>
      </div>
    )
  }
}

export default Commitment;