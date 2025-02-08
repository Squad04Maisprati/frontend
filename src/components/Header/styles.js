import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #0062ff; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  top: 0;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;


