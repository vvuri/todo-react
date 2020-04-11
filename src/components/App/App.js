import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'React practice', important: true,  id: 1 },
      { label: 'TV watch',       important: false, id: 2 }, 
      { label: 'Drink Tea',      important: false, id: 3 },
    ]
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

  addItem = text => {
    this.setState( ({ todoData }) => {
      const xid = Math.max.apply(Math, todoData.map(function(o) { return o.id; })) + 1;
      const newArray = [ ...todoData, { label: text, important: false, id: xid }];

      return {
        todoData: newArray
      }
    });
  }

  render () {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList 
        todos={ todoData } 
        onDeleted = { this.deleteItem }/>
      
      <AddItem 
        onAdd = { this.addItem } />
    </div>      
    );
  };  
};
