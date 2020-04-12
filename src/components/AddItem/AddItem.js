import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {
    state = {
        label: ''
    }
    
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        /* отменить стандартно поведение формы - перезагрузка */
        e.preventDefault(); 
        if ( this.state.label !== '' ) 
            this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    }

    render () {    
        return (
            <form className="add-item d-flex"
                onSubmit = { this.onSubmit }>
                <input type="text" 
                    className="form-control" 
                    onChange={ this.onLabelChange } 
                    placeholder = "Whats you do"
                    value = { this.state.label } />
                <button type="button" 
                    className="btn btn-info additem-button"
                    onClick = { this.onSubmit }>
                    AddItem
                </button>
            </form>
        );
    }
}
