import React from 'react';

class SelectUser extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            newUser: ''
        }
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state.newUser)
        event.preventDefault();
        this.props.submit(event, this.state.newUser)
    }

    componentDidMount () {
        console.log("Yay")
    }

    render () {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.newUser}
                placeholder="New user"
                name="newUser"
                onChange={this.handleChanges}
                />
                <button type="submit">Update user</button>
            </form>
        </div>
    )
    }
}

export default SelectUser;