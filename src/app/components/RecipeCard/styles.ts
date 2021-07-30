import styled from 'styled-components';
import TitleComponent from '../Title';
import ButtonComponent from '../Button';

export const Container = styled.div`
  height: 225px;
  width: 528px;

  border-radius: 7px;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.88);
  box-shadow: 4px 7px 12px -6px rgba(0, 0, 0, 0.88);

  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Image = styled.img`
  height: 225px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Title = styled(TitleComponent)`
  margin-left: 20px;
`;

export const Button = styled(ButtonComponent)`
  margin-top: 14px;
  margin-left: 20px;
  color: var(--white);
  height: 48px;
  width: 134px;
  background-color: var(--primary);
`;
