// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.todolist.map(
                    item =>
                    <Todo 
                    todoitem={item} 
                    toggleCompleted={this.props.toggleCompleted}
                    />
                )}
                </ul>
            </div>
        )
    }
}

export default TodoList;