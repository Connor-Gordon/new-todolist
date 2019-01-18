import React, { Component } from 'react';
import {deleteTodo, toggleStatus} from '../actions/todo'
import { connect } from 'react-redux'
import '../styles/item.css'


class TodoItem extends Component {

    deleteTodo = (e) => {
        deleteTodo(this.props.id)
    }

    changeStatus = (e) => {
        toggleStatus(this.props.status)
        
    }

  render() {
      
    return (
      <li id="li" className={this.props.active ? "" : "complete"} onClick={this.changeStatus}>
            <button className="completeButton" onClick={this.changeStatus}></button>
            <span className="lip">{this.props.text}</span>
            <button className="removeButton" onClick={this.deleteTodo}>x</button>
      </li>
    );
  }
}

function mapStateToProps(appState) {
    console.log("item", appState.todos)
    return {
      todo: appState.todos,
      
    }
  }
  
  export default connect(mapStateToProps)(TodoItem)