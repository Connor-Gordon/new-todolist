import React, { Component } from 'react';
import { Provider } from 'react-redux'
import '../styles/app.css'
import store from '../store'

import TodoForm from './TodoForm'
import TodoList from './TodoList'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div id="mainContainer">
         <TodoForm />
         <TodoList />
       </div>
      </Provider>
    );
  }
}

export default App;