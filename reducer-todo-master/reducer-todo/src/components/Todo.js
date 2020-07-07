import React, {useState} from 'react';
import '../App.css';

export default function Todo (props) {
    // you can also extract props like this
    // const {id, toggleComplete, task, id} = props

    const [editing, setEditing] = useState(false)
    const [editInput, setEditedInput] = useState("");

    const handleChanges = event => {
        setEditedInput(event.target.value)
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSubmit = event => {
        console.log("sup")
        event.preventDefault()
        props.updateTodo(editInput, props.todoProps.id)
        setEditing(false)
    }

    if (editing) {
        return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="editTodo"
            value={editInput}
            placeholder={props.todoProps.task}
            onChange={handleChanges}
            />
            <button type="submit">Update Todo</button>
        </form>
        )
    }
    return (
        <div>
        <h3 className={props.todoProps.completed ? "completed" : null}>{props.todoProps.task}</h3>
        <button onClick={() => props.toggleComplete(props.todoProps.id)}>Complete</button>
        <button onClick={handleEdit}>Edit</button>
        </div>
    )
}