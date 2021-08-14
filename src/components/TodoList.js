import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todo, onRemove, onToggle }) => {
  return (
    <div className="Todolist">
      {todo.map((todo) => (
        <TodoListItem
          onRemove={onRemove}
          onToggle={onToggle}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
