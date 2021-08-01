import styled from 'styled-components';
import ButtonComponent from '../../../app/components/Button';
import CardContentComponent from '../_components/CardContent';
import TitleComponent from '../_components/Title';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Logo = styled.span`
  padding: 2em 2em;
  height: 45px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: var(--primary);

  @media (max-width: 960px) {
    text-align: center;
    padding-bottom: 2em;
  }

  @media (max-width: 330px) {
    padding-bottom: 3em;
  }
`;

export const Title = styled(TitleComponent)`
  font-size: 1.5rem;
`;

export const CardContent = styled(CardContentComponent)`
  input {
    margin-bottom: 15px !important;
    width: 100% !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    border: none;
    border-radius: 0;

    box-shadow: none !important;
    background: transparent !important;
  }

  @media (max-width: 425px) {
    padding-left: 1.2em;
    padding-right: 1.2em;
  }
`;

export const Button = styled(ButtonComponent)`
  height: 52px;
  width: 100%;
  color: var(--white);
  background-color: #badc58;
  margin-top: 1em;
`;
