import React from 'react';
import QuestionList from './components/QuestionList.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      points: 0
    }
  }



  render() {
    return (
      <div>
        <h1>Choose your Hogwarts House!</h1>
        <QuestionList pointsProps={this.state.points}/>
      </div>
    );
  }
}

export default App;
