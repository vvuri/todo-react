import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css'; 

const App = () => {
  const todoData = [
    { label: 'React practice', important: true,  id: 1 },
    { label: 'TV watch',       important: false, id: 2 }, 
    { label: 'Drink Tea',      important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
