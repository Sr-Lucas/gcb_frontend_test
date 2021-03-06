import styled from 'styled-components';
import ScrollContainerComponent from 'react-indiana-drag-scroll';
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

  ${({ artPosition }) =>
    artPosition === 'right'
      ? `
    background-position-x: 100%;
    background-position-y: 0;
  `
      : `
    background-position-x: 0;
    background-position-y: 100%;
  `}

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
    height: 34px;
    width: 85px;
    margin-right: 1em;
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
    if (align === 'right') {
      return `
        position: absolute;
        right: 0;
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        @media (max-width: 1500px) {
          top: 10em;
          height: 80%;
          width: 40%;
        }
      `;
    }

    return '';
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

  @media (max-width: 1000px) {
    margin-top: 7em;
  }

  @media (max-width: 800px) {
    margin-top: 9em;
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

export const Text = styled(TitleComponent)`
  margin-top: 1em;
  color: #9e9baf;
  font-weight: 400;
  max-width: 80%;

  @media (max-width: 800px) {
    margin-top: 1em;
    font-size: 0.8rem !important;
    max-width: 100%;
  }
`;

export const TitleCenterTopWrapper = styled.div`
  position: absolute;
  top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-align: center;
    display: block;
  }

  @media (max-width: 800px) {
    span {
      font-size: 1.4rem;
    }
  }
`;

export const Button = styled(ButtonComponent)`
  margin-top: 1em;
  height: 52px;
  width: 150px;
  color: var(--white);
  background-color: #badc58;
  margin-top: 2.5em;
`;

export const ContentWidthContraint = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 1500px) {
    width: 80%;

    span:nth-child(1) {
      font-size: 1.2rem;
      margin-bottom: 1.2em;
    }
  }

  @media (max-width: 970px) {
    span {
      margin: 0 auto;
      margin-bottom: 1.5em;
    }
  }

  @media (max-width: 800px) {
    padding-top: 8em;
  }
`;

export const MembershipInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 2em;

  button {
    margin: 0;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const MembershipInput = styled.input`
  border: 1px solid #cacaca;
  border-radius: 5px;
  max-width: 344px;
  min-width: 344px;
  height: 52px;
  margin-right: 2em;
  padding-left: 1em;

  --placeholder-color: #b4b4b4;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--placeholder-color);
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--placeholder-color);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--placeholder-color);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--placeholder-color);
  }

  @media (max-width: 1300px) {
    margin-bottom: 2em;
  }

  @media (max-width: 600px) {
    margin: 2em auto;
    min-width: 0;
    max-width: 100vw;
    width: 85vw;
  }
`;

export const TitleMembership = styled(TitleComponent)`
  @media (max-width: 970px) {
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.4rem;
    margin-top: 3em;
  }
`;

export const MembershipButton = styled(Button)`
  @media (max-width: 600px) {
    width: 85vw !important;
  }
`;

export const ScrollContainer = styled(ScrollContainerComponent)`
  width: 99vw;
  overflow: hidden;
  overflow-x: scroll;

  margin-top: 4em;
`;

export const Section = styled.section`
  padding: 0px;
  margin: 0px;
  height: 490px;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;
  padding-left: 8em;

  @media (max-width: 860px) {
    width: 120vw;
  }

  @media (max-width: 670px) {
    width: 200vw;
  }

  @media (max-width: 410px) {
    width: 250vw;
  }

  @media (max-width: 320px) {
    width: 280vw;
  }

  @media (max-width: 300px) {
    width: 300vw;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 3em;

  span {
    margin-left: 2em;
    font-size: 0.8rem;
    text-align: center;
  }

  @media (max-width: 970px) {
    padding-bottom: 65px;
  }

  @media (max-width: 690px) {
    flex-direction: column;

    span {
      margin-bottom: 1em;
    }
  }
`;

export const CopyrightText = styled.span`
  margin-right: auto;
  color: var(--title-color);

  @media (max-width: 690px) {
    margin-right: 0;
  }
`;

export const NavigationBar = styled.div`
  @media (min-width: 970px) {
    display: none;
  }

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;

  background-color: #ffff;
  width: 100%;
  height: 60px;

  -webkit-box-shadow: 2px -2px 17px -2px rgba(0, 0, 0, 0.13);
  box-shadow: 2px -2px 17px -2px rgba(0, 0, 0, 0.13);
`;

export const NavigationBarButton = styled.div`
  span {
    font-size: 0.65rem;
    letter-spacing: 1.2px;
    text-align: center;
    color: #000000;
    margin-top: 6px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: calc(100% / 3);
`;
