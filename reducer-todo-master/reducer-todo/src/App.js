import React, {useReducer} from 'react';
import './App.css';

// importing our todoReducer and our initialState
import {initialState, todoReducer} from './reducers/todoReducer';

// import our TodoForm and TodoList

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const addTodo = item => dispatch({type: "ADD_TODO", payload: item})
  const toggleComplete = id => dispatch({type: "TOGGLE_COMPLETED", payload: id})
  const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"})
  const updateTodo = (task, id) => dispatch({type: "UPDATE_TODO", payload: {task, id}})
  return (
    <div className="App">
      <TodoList todoPropsList={state.todos} updateTodo={updateTodo} toggleComplete={toggleComplete}/>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
