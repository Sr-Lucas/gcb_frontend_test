import styled from 'styled-components';

export interface TitleProps {
  size: number;
}

export default styled.span<TitleProps>`
  font-size: ${({ size }) => size}px;
  font-family: 'Montserrat';
  font-weight: bold;
  color: var(--title-color);
`;
