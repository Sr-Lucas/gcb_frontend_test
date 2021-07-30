import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100px;
  background-color: var(--primary);
  cursor: pointer;
  border-radius: 5px;

  span {
    text-align: center;
    font-size: 16px;
    font-family: 'Muli';
    color: var(--white);
  }
`;
