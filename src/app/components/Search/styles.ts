import styled from 'styled-components';

import { Search } from '../../../styles/icons';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 970px) {
    justify-content: center;
    margin-top: 5em;
  }
`;

export const Input = styled.input`
  height: 45px;
  width: 80%;
  background-color: var(--secondary);
  padding-left: 10px;
  margin-right: 10px;
  border-radius: 11px;
  border: 1px solid white;

  --placeholder-color: #b4b4b4;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--placeholder-color);
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--placeholder-color);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--placeholder-color);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--placeholder-color);
  }

  :hover {
    transition-duration: 200ms;
    border: 1px solid #b4b4b4;
  }

  :focus {
    transition-duration: 200ms;
    border: 1px solid #b4b4b4;
  }
`;

export const Button = styled.button`
  height: 43px;
  width: 43px;
  background-color: var(--primary);
  border-radius: 10px;
  position: absolute;
  right: calc(20% + 1px);

  @media (max-width: 970px) {
    right: calc(10% + 6px);
  }
`;

export const SearchIcon = styled(Search)`
  color: var(--white);
`;
