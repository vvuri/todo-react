import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';

export default class App extends Component {
  _maxId = 0;

  state = {
    todoData: [
      this.createTodoItem('React practice'),
      this.createTodoItem('TV watch'), 
      this.createTodoItem('Drink Tea'),
    ],
    filter: ''
  }

  createTodoItem (label) {
    return { 
      label: label, 
      important: false, 
      done: false,
      id: this._maxId++
    }
  }

  updateTodoDataToggle( id, field) {
    this.setState( ({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, [field]: !oldItem[field] } ;
      const newArray = [ 
        ...todoData.slice(0, idx), 
        newItem,
        ...todoData.slice(idx+1)
      ]
      
      return {
        todoData: newArray
      }
    })
  }

  deleteItem = id => {
    this.setState( ({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [ ...todoData.slice(0, idx), ...todoData.slice(idx+1)]; 

        return {
          todoData: newArray
        }
      }
    );
  }

  addItem = label => {
    this.setState( ({ todoData }) => {
      const newArray = [ ...todoData, this.createTodoItem(label) ];

      return {
        todoData: newArray
      }
    });
  }

  search(items, filter) {
    return items.filter( item => {
      return (item.label.toLowerCase().indexOf(filter.toLowerCase())>-1 || filter === '');
    });
  }

  setFilter = text => {
    this.setState( ({ filter }) => {
      return {
        filter: text
      }
    });
  }

  onToggleImportant = id => {
    this.updateTodoDataToggle( id, 'important');
  }  

  onToggleDone = id => {
    this.updateTodoDataToggle( id, 'done');
  }

  render () {
    const { todoData, filter } = this.state;
    const doneCount = todoData.filter( el => el.done).length;
    const todoCount = todoData.length - doneCount;    
    const visibleItems = this.search(todoData, filter);

    return (
      <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel 
          onFilter = { this.setFilter }/>
        <ItemStatusFilter />
      </div>

      <TodoList 
        todos={ visibleItems } 
        onDeleted = { this.deleteItem }
        onToggleImportant = { this.onToggleImportant }
        onToggleDone = { this.onToggleDone }
      />
      
      <AddItem 
        onAdd = { this.addItem } />
    </div>      
    );
  };  
};
