import styled from 'styled-components';

import { ContainerProps, ContentProps } from './Istyles';

import TitleComponent from '../../app/components/Title';
import ButtonComponent from '../../app/components/Button';

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 1920px;
  /* padding: 0 17% 0 17% 0; */
  background-color: var(--background-primary);
  background-image: url(${({ backgroundArt }) => backgroundArt});
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

  :nth-child(2n) {
    background-color: var(--background-secondary);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0 139px 0 139px;
  min-height: var(--default-height);

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
    max-width: 500px;

    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 970px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 12px;
    min-width: 0px;
    max-width: 600px;
  }
`;

export const NavigatorHeaderButton = styled.button`
  height: 2em;
  color: var(--white);

  @media (max-width: 1100px) {
    font-size: 12px;
    margin-right: 2em;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const RegisterButton = styled(ButtonComponent)`
  height: 52px;
  width: 130px;
  background-color: var(--white);
  color: var(--primary);

  @media (max-width: 1100px) {
    width: 100px;
    height: 42px;
    justify-self: flex-end;
    font-size: 12px;
  }

  @media (max-width: 970px) {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const Content = styled.div<ContentProps>`
  ${({ align }) => {
    if (align === 'center') {
      return `
        padding-top: 55px;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }
    if (align === 'left') {
      return `
        position: absolute;
        height: 60%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
      `;
    }
    return `
        position: absolute;
        top: 18em;
        width: 40%;
        margin-left: auto;
      `;
  }};

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

export const ShowcaseContainer = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 970px) {
    margin-top: 20%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BackDrop = styled.div`
  position: relative;
  background-color: var(--primary);
  border-radius: 15px;
  z-index: -1;
  width: 100%;
  align-self: center;

  @media (max-width: 970px) {
    height: 120px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: calc(50vw - 200px);
  bottom: 0px;

  width: 250px;
  height: 250px;

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    right: calc(50vw - 110px);
  }
`;

export const RecipeGrid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  margin-top: 4.5em;

  @media (max-width: 800px) {
    margin-top: 4.5em;
    grid-template-columns: auto;
    grid-row: auto;
  }
`;

export const Title = styled(TitleComponent)`
  @media (max-width: 800px) {
    margin-top: 2em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.8rem;
  }
`;

export const TitleCenterTopWrapper = styled.div`
  position: absolute;
  top: 2em;

  @media (max-width: 800px) {
    span {
      font-size: 1.4rem;
    }
  }
`;
