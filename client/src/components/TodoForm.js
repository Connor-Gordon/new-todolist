import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
/* import font-awesome from 'font-awesome/css/font-awesome/css' */

import '../styles/form.css'


class TodoForm extends Component {
    state = {
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addTodo(this.state.todo) 
        this.setState({
            todo: ""
        })
    }

  render() {



    return (
    <div className="formContainer">          
        <h2>To Do List</h2>
        <div className="form">
            <button  className="chevron">V</button>
            <form onSubmit={this.handleSubmit}>
                
                <input
                    type="text" 
                    autoComplete="off"
                    name="todo" 
                    placeholder="What needs to be done?" 
                    value={this.state.todo} 
                    onChange={this.handleChange}>
                </input>
            </form>
        </div>
    </div> 
    );
  }
}

function mapStateToProps(appState) {
  console.log('appstate')
  return {
    todo: appState.todos,
  }
}

export default connect(mapStateToProps)(TodoForm)