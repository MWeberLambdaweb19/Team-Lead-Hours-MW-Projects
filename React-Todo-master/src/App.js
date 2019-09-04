import React from 'react';
import data from './dummyData.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  // this is doing the same thing, declaring the state variable
  // state = {
  //   todos: []
  // }

  componentDidMount = () => {
    const localData = JSON.parse(localStorage.getItem("todolist"))
    this.setState({
      todos: localData 
    })
  }

  handleSubmit = (event, newTodo) => {
    event.preventDefault();
    let todoShape = {
      task: newTodo,
      id: Date.now(),
      completed: false
    };

    const updatedList = [...this.state.todos, todoShape]

    this.setState({
      todos: updatedList
    });
    localStorage.setItem("todolist", JSON.stringify(updatedList));
  };

  toggleCompleted = id => {
    const TodoById = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    })
    this.setState({
      todos: TodoById
    })
    localStorage.setItem("todolist", JSON.stringify(TodoById));
  }

  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({
      todos: completed
    })
    localStorage.setItem("todolist", JSON.stringify(completed));
  }

  render() {
    if (!this.state.todos) return <h1>Loading Todos</h1>
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        handleSubmit={this.handleSubmit}
        clearCompleted={this.clearCompleted}
        />
        <TodoList 
        todolist={this.state.todos} 
        toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
