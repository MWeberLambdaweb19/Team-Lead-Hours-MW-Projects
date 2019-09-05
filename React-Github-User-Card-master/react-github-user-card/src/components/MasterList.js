import React from 'react';
import axios from 'axios';
import UserList from './users/UserList.js';
import FollowerList from './followers/FollowerList.js';
import SelectUser from './select/SelectUser.js';

class MasterList extends React.Component {
    constructor() {
      super();
      this.state = {
        userData: {},
        followerData: [],
        userName: 'MWeberLambdaweb19'
      }
    }

    handleSubmit = (newUser) => {
        console.log(this.state.userName)
        this.setState({
            userName: newUser
        })
    }
  
    componentDidMount = () => {
      console.log(this.state.userName)
      axios
        .get(`https://api.github.com/users/${this.state.userName}`)
        .then(response => {
          console.log(response.data)
          this.setState({
            userData: response.data
          });
        })
        .catch(err => console.log(err));
      
      axios
        .get(`https://api.github.com/users/${this.state.userName}/followers`)
        .then(response => {
          console.log(response.data)
          this.setState({
            followerData: response.data
          });
        })
        .catch(err => console.log(err));
    }
  
    render () {
      return (
        <div>
          <SelectUser submit={this.handleSubmit}/>
          <UserList userProps={this.state.userData}/>
          <FollowerList followerProps={this.state.followerData}/>
        </div>
      )
    }
}

export default MasterList;