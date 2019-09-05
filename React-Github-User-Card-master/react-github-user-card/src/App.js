import React from 'react';
// import axios from 'axios';
// import UserCard from './components/UserCard.js'; CHECK YOUR IMPORTS BEFORE UNCOMMENTING
// import FollowerCard from './components/FollowerCard.js'; CHECK YOUR IMPORTS BEFORE UNCOMMENTING
import MasterList from './components/MasterList.js';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userData: {},
  //     followerData: [],
  //     userName: 'MWeberLambdaweb19'
  //   }
  // }

  // componentDidMount = () => {
  //   axios
  //     .get(`https://api.github.com/users/${this.state.userName}`)
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({
  //         userData: response.data
  //       });
  //     })
  //     .catch(err => console.log(err));
    
  //   axios
  //     .get(`https://api.github.com/users/${this.state.userName}/followers`)
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({
  //         followerData: response.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // render () {
  //   return (
  //     <div>
  //       <h1>This is my app!</h1>
  //       <UserCard user={this.state.userData} />
  //       {this.state.followerData.map(follower => {
  //         return (
  //         <div key={follower.id}>
  //         <FollowerCard followers={follower} />
  //         </div>  
  //         )        
  //       })}
  //     </div>
  //   )
  // }
  render () {
    return (
    <div>
      <h1>This is my app!</h1>
      <MasterList />
    </div>
    )
  }
}

export default App;
