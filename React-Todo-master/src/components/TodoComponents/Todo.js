import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <li
            className={this.props.todoitem.completed ? 'completed' : null}
            onClick={() => this.props.toggleCompleted(this.props.todoitem.id)}
            >{this.props.todoitem.task}</li>
        </div>
        )
    }
}

export default Todo;