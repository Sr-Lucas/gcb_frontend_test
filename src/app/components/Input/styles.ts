import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

export const InputWrapper = styled.div<InputProps>`
  ${({ error }) => (error ? 'animation: shake 0.5s;' : '')}
  animation-iteration-count: 1;

  label {
    text-align: left;
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;

    ${({ error }) => (error ? 'color: #f00;' : '')}
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    ${({ error }) => (error ? 'border: 1px solid #f00 !important;' : '')}

    :focus {
      border-color: #aaa;
    }
  }

  span {
    text-align: left;
    display: block;
    font-size: 0.7rem;
    transform: translate(8px, -12px);
  }
`;
