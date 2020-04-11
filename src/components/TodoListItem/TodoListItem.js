import React, { Component } from 'react'
import './TodoListItem.css';  

export default class TodoListItem extends Component {

    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
        let classNemes = 'todo-list-item';

        if (done) {
            classNemes += ' done';
        }

        if (important) { 
            classNemes += ' important';
        }

        return (
            <span className= { classNemes }>      
                <span 
                    className="todo-list-item-label"
                    onClick = { onToggleDone } >
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick = { onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick = { onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };  
}; 
