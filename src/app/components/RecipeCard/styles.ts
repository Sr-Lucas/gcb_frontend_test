import styled from 'styled-components';
import TitleComponent from '../Title';
import ButtonComponent from '../Button';

export const Container = styled.div`
  max-height: 225px;
  max-width: 528px;

  border-radius: 7px;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.88);
  box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.88);

  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Image = styled.img`
  height: 100%;
  width: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Title = styled(TitleComponent)`
  margin-left: 20px;
  font-size: 1rem;
`;

export const Button = styled(ButtonComponent)`
  margin-top: 14px;
  margin-left: 20px;
  color: var(--white);
  background-color: var(--primary);

  @media (max-width: 1000px) {
    height: 3em;
    width: 7em;
    font-size: 0.7rem;
  }
`;
