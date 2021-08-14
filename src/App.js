import React, { useCallback, useState, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((el) => el.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          onRemove={onRemove}
          todo={todos}
          onToggle={onToggle}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
};

export default App;
