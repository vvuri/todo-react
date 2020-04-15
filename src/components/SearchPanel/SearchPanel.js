import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {

    onLabelChange = (e) => { 
        this.props.onFilter(e.target.value);
    }
    
    render () {
        return (
          <input type="text"
              className="form-control search-input"
              placeholder="type to search" 
              onChange = { this.onLabelChange }/>
        );
    }
};
