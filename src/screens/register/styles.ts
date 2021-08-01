import styled from 'styled-components';
import CardContentComponent from './_components/CardContent';

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

  @media (max-width: 1100px) {
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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  padding: 2em 2em;
  height: 45px;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  color: var(--white);

  @media (max-width: 960px) {
    text-align: center;
    padding-bottom: 2em;
  }

  @media (max-width: 330px) {
    padding-bottom: 3em;
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

    @media (max-width: 960px) {
      background-color: var(--white);
      color: #a6a6a6;
      border: 1px solid #dcdcdc;
    }
  }
`;

export const RegisterArtWrapper = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
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
  @media (max-width: 960px) {
    width: 100%;
    border: none;
    border-radius: 0;

    box-shadow: none !important;
    background: transparent !important;
  }
`;
