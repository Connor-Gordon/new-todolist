import shortid from 'shortid'
import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'


export function addTodo(todo) {
    store.dispatch({
      type: 'ADD_TODO', 
      todo: {
        id: shortid.generate(),
        text: todo,
        active: true
      }
    })
}

export function deleteTodo(id) {
  store.dispatch({
    type: "DELETE_TODO",
    id: id
  })
}

export function toggleStatus(id) {
  store.dispatch({
    type: "TOGGLE_STATUS",
    id: id
  })
}

export function clearTodo(todo) {
  store.dispatch({
    type: 'CLEAR_TODO'
  })
}