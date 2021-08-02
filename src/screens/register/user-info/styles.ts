import styled from 'styled-components';
import ButtonComponent from '../../../app/components/Button';
import BackButtonComponent from '../_components/BackButton';
import CardContentComponent from '../_components/CardContent';
import TitleComponent from '../_components/Title';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;
`;

export const BackButton = styled(BackButtonComponent)`
  margin-right: auto;
`;

export const Title = styled(TitleComponent)`
  text-align: center !important;
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-right: auto;
  line-height: 1.3;
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
