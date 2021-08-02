import styled from 'styled-components';

interface FloatLabelProps {
  active: boolean;
  error: boolean;
}

export const FloatLabel = styled.div.attrs<FloatLabelProps>(
  {},
)<FloatLabelProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  label {
    font-size: 16px;
    font-family: 'Muli';
    padding: 0 18px;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 12px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;

    ${({ active }) =>
      active ? 'transform: translate(0, 8px) scale(0.75);' : ''}
  }

  :focus-within label {
    transform: translate(0, 5px) scale(0.75);
  }

  input {
    width: 100%;
    height: 50px;
    padding: 14px 16px 0 10px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-family: Gidole;
    font-size: 16px;

    ${({ error }) => (error ? 'border 1px solid red !important;' : '')}
  }
`;

export const Error = styled.span`
  color: red;
  margin-top: 8px;
`;
