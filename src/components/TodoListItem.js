import React from 'react';
import cn from 'classnames';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import styled from 'styled-components';

const ToDo = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1rem;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    &:hover {
      color: #ff8787;
    }
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;
  return (
    <ToDo>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </ToDo>
  );
};

export default TodoListItem;
// const FodoListItem = styled.div`
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   &:nth-child(even) {
//     background: #f8f9fa;
//   }
// `;

// const CheckBox = styled.input`
//   cursor: pointer;
//   flex: 1;
//   display: flex;
//   align-items: center;
//   svg {
//     font-size: 1.5rem;
//   }
// `;

// const Text = styled.input`
//   margin-left: 0.5rem;
//   flex: 1;
//   color: #adb5bd;
//   text-decoration: line-through;
//   &.checked {
//     svg {
//       color: #22b8cf;
//     }
//   }
// `;

// const Remove = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 1.5rem;
//   color: #ff6b6b;
//   cursor: pointer;
//   &:hover {
//     color: #ff8787;
//   }
// `;
