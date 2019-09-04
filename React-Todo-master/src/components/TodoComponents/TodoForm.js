import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ""
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            newTodo: ""
        })
        this.props.handleSubmit(event, this.state.newTodo)
    } 

    render () {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.newTodo}
                name="newTodo"
                placeholder="add a new todo here"
                onChange={this.handleChanges}
                />
                <button type="submit">Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear</button>
            </form>
        </div>
        )
    }
}

export default TodoForm;