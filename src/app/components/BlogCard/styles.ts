import styled from 'styled-components';
import TitleComponent from '../Title';

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 7px;
  margin-left: 1em;
  margin-right: 1em;
  max-width: 348px;
  max-height: 450px;

  min-height: 350px;
  min-width: 210px;

  width: 20vw;
  height: 22vw;

  padding-bottom: 2em;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  -webkit-box-shadow: 6px 6px 15px -3px rgba(0, 0, 0, 0.61);
  box-shadow: 6px 6px 15px -3px rgba(0, 0, 0, 0.61);
`;

export const Image = styled.img`
  width: 100%;
  max-width: 348px;
`;

export const Title = styled(TitleComponent)`
  margin-top: 1em;
  margin-left: 1em;

  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const AuthorWrapper = styled.div`
  margin-top: 1em;
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  border-radius: 100%;
  max-height: 52px;
  max-width: 52px;
  min-width: 28px;
  min-height: 28px;
  height: 2vw;
  width: 2vw;
`;

export const AuthorName = styled.span`
  margin-left: 1em;
`;
