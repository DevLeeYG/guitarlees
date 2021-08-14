import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
const From = styled.div`
  display: flex;
  background-color: #495057;
  .input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee;
    }
    flex: 1;
  }
  .TodoInsertButton {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    background: ease-in;
    &:hover {
      background: #0984e3;
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [input, setInput] = useState('');

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onlick = useCallback(
    (e) => {
      onInsert(input);
      setInput('');
      e.preventDefault();
    },
    [onInsert, input],
  );

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onInsert(input);
        setInput('');
        e.preventDefault();
      }
    },
    [onInsert, input],
  );

  return (
    <From>
      <input
        className="input"
        placeholder="할일을 입력해"
        value={input}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onlick} className="TodoInsertButton" type="submit">
        <MdAdd></MdAdd>
      </button>
      {/* +표시의 아이콘 */}
    </From>
  );
};

export default TodoInsert;
