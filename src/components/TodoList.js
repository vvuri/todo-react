import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const items = ['React practice', 'TV watch', 'Drink Tea'];
    return (
      <ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li>
        <li><TodoListItem /></li>
      </ul>
    );
  };

export default TodoList;