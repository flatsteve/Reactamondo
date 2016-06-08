import React from 'react';
import Budget from './budget/budget';

let commitments = [
  { code: 'rent', name : 'Rent' },
  { code: 'bills', name : 'Bills' },
  { code: 'mobile', name : 'Mobile' }
];

class App extends React.Component {
  render() {
    return (
      <Budget commitments={commitments}/>
    )
  }
}

export default App;