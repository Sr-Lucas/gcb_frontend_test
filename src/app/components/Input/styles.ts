import styled from 'styled-components';

export const InputWrapper = styled.div`
  label {
    text-align: left;
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    :focus {
      border-color: #aaa;
    }
  }
`;
