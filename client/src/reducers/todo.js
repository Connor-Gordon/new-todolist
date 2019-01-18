
const initialState = {
    todos: [],
    completed: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return {...state, todos:[...state.todos, action.todo]}
    case "DELETE_TODO":
        return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    case "CLEAR_TODO":
        return {...state, todos: state.todos.filter(todo => todo.active == false)}
    case "TOGGLE_STATUS":
        return {...state, todos: state.todos.map(todo => {
            if (todo.id === action.id) {
                todo.active = !todo.active
            }
            return todo
        })}
      default:
        return state
    }
  }