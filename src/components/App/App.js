import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

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
    </div>      
    );
  };  
};
