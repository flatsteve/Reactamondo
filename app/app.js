import React from 'react';
import Budget from './budget/budget';

let commitments = [
  { code: 'rent', name : 'Rent', amount: 425 },
  { code: 'bills', name : 'Bills', amount: 120 },
  { code: 'mobile', name : 'Mobile', amount: 35 }
];

class App extends React.Component {
  render() {
    return (
      <Budget commitments={commitments}/>
    )
  }
}

export default App;