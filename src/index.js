import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>React practiic</li>
      <li>TV watch</li>
      <li>Drink Tea</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>ToDo list</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder="search" />
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
