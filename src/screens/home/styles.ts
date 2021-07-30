import styled from 'styled-components';

import Illustration from '../../assets/images/Illustration.png';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  background-color: var(--background-primary);
  background-image: url(${(_) => Illustration});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0;
  background-size: contain;

  @media (max-width: 1100px) {
    background-size: 65em;
  }

  @media (max-width: 970px) {
    background: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0 139px 0 139px;
  height: var(--default-height);

  @media (max-width: 1100px) {
    margin: 0 90px 0 90px;
  }

  @media (max-width: 600px) {
    margin: 0 10px 0 10px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(var(--default-height) * 0.134);
`;

export const Logo = styled.div`
  height: 45px;

  font-size: 32px;
  font-weight: bold;
  color: var(--primary);
`;

export const NavigationWrapper = styled.div`
  margin-left: auto;
  height: 100%;
  width: 60%;
  min-width: 500px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1100px) {
    font-size: 12px;
    min-width: 300px;
    max-width: 400px;
  }
`;

export const NavigatorHeaderButton = styled.button`
  cursor: pointer;
  height: 2em;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Muli';
  color: var(--white);

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const RegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 52px;

  cursor: pointer;
  background-color: var(--white);
  border-radius: 5px;

  span {
    text-align: center;
    font-size: 16px;
    font-family: 'Muli';
    color: var(--primary);
  }

  @media (max-width: 1100px) {
    width: 100px;
    height: 42px;

    span {
      font-size: 12px;
    }
  }

  @media (max-width: 970px) {
    background-color: var(--primary);
    span {
      color: var(--white);
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 18em;
  width: 40%;

  @media (max-width: 970px) {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-family: 'Montserrat';
  color: var(--title-color);

  @media (max-width: 970px) {
    margin-top: 2em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 38px;
  }
`;

export const ShowcaseContainer = styled.div`
  display: none;

  @media (max-width: 970px) {
    margin-top: 10%;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BackDrop = styled.div`
  background-color: var(--primary);
  position: absolute;
  right: 0%;
  border-radius: 15px;
  z-index: -1;
  width: 100%;
  align-self: center;

  @media (max-width: 970px) {
    margin-top: 5em;
    top: 55%;
    height: 150px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;
