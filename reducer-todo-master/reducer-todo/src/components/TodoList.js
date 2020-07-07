import React from 'react';
import Todo from './Todo';

export default function TodoList (props) {
    return (
        <div>{props.todoPropsList.map(item => 
            <Todo 
            key={item.id} 
            todoProps={item} 
            toggleComplete={props.toggleComplete}
            updateTodo={props.updateTodo}
            />
        )}
        </div>
    )
}