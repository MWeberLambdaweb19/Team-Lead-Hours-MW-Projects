export const initialState = {
    todos: [
        {
            task: "Learn reducers!",
            completed: false,
            id: 1,
        },
        {
            task: "Learn reducer hooks",
            completed: false,
            id: 2,
        },
        {
            task: "Learn to use initialState",
            completed: true,
            id: 3,
        }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO": 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        task: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ]
            }
        case "TOGGLE_COMPLETED":
            console.log("working!")
            return {
                ...state,
                todos: state.todos.map(todo => 
                        todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                    )
            }
            // GO OVER WHY WE DON'T NEED THE BRACES FOR THE EXPRESSION (WE'RE ONLY WRITING ONE LINE)
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => 
                    !todo.completed
                )
            };
        case "UPDATE_TODO":
            console.log(action)
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? {...todo, task: action.payload.task} : todo)
            }
    default:
        return state;
    }
}