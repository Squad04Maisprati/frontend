import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color:#1d70f5; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #0050d1;
  }
`;