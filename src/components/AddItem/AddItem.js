import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    render () {    
        const { onAdd } = this.props;

        return (
            <button type="button" 
                className="btn btn-info additem-button"
                onClick = { () => onAdd('Drink Coffee') }>
                Add Item
            </button>
        );
    }
}
