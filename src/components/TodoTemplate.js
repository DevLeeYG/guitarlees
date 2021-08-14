import React, { Component } from 'react';
import styled from 'styled-components';

const Apptitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  align-items: center; //세로상황
  justify-content: center; //가로상황
`;

const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <Apptitle>일정관리</Apptitle>
      <Content>{children}</Content>
    </div>
  );
};

export default TodoTemplate;
