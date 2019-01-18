import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import '../styles/list.css'
import { clearTodo } from '../actions/todo';


class TodoList extends Component {

    handleClear = (e) => {
        clearTodo()
    }

  render() {

    return (
      <div className="listContainer">
            <ul className="list">
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            <div id="bottomBar">
                <span id="itemsLeft">{this.props.todos.length} Items Left</span>
                <div>
                    <span className="spanner">All</span>
                    <span className="spanner">Active</span>
                    <span className="spanner">Completed</span>
                </div>
                <span className="hover" onClick={this.handleClear}>Clear Completed</span>
            </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
    console.log("list", appState.todos.length)
  return {
    todos: appState.todos,
    
  }
}

export default connect(mapStateToProps)(TodoList)