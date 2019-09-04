// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ""
        }
    }

    handleSearch = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.searchInput}
                name="searchInput"
                onChange={this.handleSearch}
                />
                <ul>
                {this.props.todolist.map(
                    item =>
                    item.task.includes(this.state.searchInput) && ( 
                    <Todo 
                    todoitem={item} 
                    toggleCompleted={this.props.toggleCompleted}
                    />
                    )
                )}
                </ul>
            </div>
        )
    }
}

export default TodoList;