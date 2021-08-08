import styled from 'styled-components';
import CardContentComponent from './_components/CardContent';
import BackButtonComponent from './_components/BackButton';
import TitleComponent from './_components/Title';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  background: rgb(186, 220, 88);
  background: radial-gradient(
    circle,
    rgba(186, 220, 88, 1) 76%,
    rgba(200, 200, 200, 0.5) 4%,
    rgba(255, 255, 255, 1) 80%
  );
  background-repeat: no-repeat;

  background-size: cover;
  background-position-x: -35em;

  @media (max-width: 1340px) {
    background-position-x: -28em;
  }

  @media (max-width: 960px) {
    padding-bottom: 20em;
    background-position-x: 0;
    background-position-y: -30em;
  }

  @media (max-width: 650px) {
    background-position-y: -28em;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const BackButton = styled(BackButtonComponent)`
  margin-left: 1em;
  color: white;
  height: 2rem;
  width: 2rem;
  font-weight: bold;
`;

export const Logo = styled.h1`
  height: 45px;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  color: var(--white);
  margin-right: auto;
  margin-left: 1em;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: fit-content;

  position: absolute;
  right: 20%;
  bottom: calc(50% - 150px);

  @media (max-width: 1340px) {
    right: 10%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
  }
`;

export const Title = styled(TitleComponent)`
  @media (max-width: 960px) {
    line-height: 30px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  letter-spacing: -0.0024em;
  margin: 0 0 30px;
  line-height: 50px;
  font-weight: 400;
  font-family: 'Montserrat';
  color: var(--subtitle-color);

  @media (max-width: 960px) {
    line-height: 25px;
  }
`;

export const StartRegistrationButton = styled.button`
  width: 100%;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  color: #a6a6a6;
  border-radius: 4px;
  -webkit-appearance: button;
  text-decoration: none;
  font-weight: 500;
  height: 50px;

  transition: 300ms;

  overflow: hidden;

  :hover {
    background-color: var(--primary);
    color: var(--white);
    border: none;
  }

  @media (max-width: 960px) {
    background-color: var(--primary);
    color: var(--white);
    border: none;
    position: fixed;
    bottom: 2em;

    width: 90%;
  }
`;

export const RegisterArtWrapper = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: calc(50% - 170px);
  left: 10em;

  @media (max-width: 960px) {
    align-items: flex-start;
    justify-content: center;

    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;

    padding-top: 6em;
  }
`;

export const RegisterArtImage = styled.img`
  max-height: 25em;
  max-width: 25em;
  min-height: 14em;
  min-width: 14em;
  height: 30vw;
  width: 30vw;

  @media (max-width: 320px) {
    min-height: 12em;
    min-width: 12em;
  }
`;

export const CardContent = styled(CardContentComponent)`
  @media (max-width: 1120px) {
    width: 410px;
  }

  @media (max-width: 960px) {
    width: 100%;
    border: none;
    border-radius: 0;

    box-shadow: none !important;

    position: fixed;
    bottom: 10em;
  }
`;
