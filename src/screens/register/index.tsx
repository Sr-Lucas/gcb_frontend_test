import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  Container,
  SubTitle,
  StartRegistrationButton,
  Logo,
  RegisterArtWrapper,
  RegisterArtImage,
  ContentWrapper,
  CardContent,
  Header,
  BackButton,
  Title,
} from './styles';

import RegisterArt from '../../assets/images/register_art.svg';

const Register: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => history.push('/')} />
        <Logo>Healthy Food</Logo>
      </Header>
      <RegisterArtWrapper>
        <RegisterArtImage src={RegisterArt} />
      </RegisterArtWrapper>
      <ContentWrapper>
        <CardContent>
          <Title>The registration will take just a few steps!</Title>
          <SubTitle>You can start whenever you are ready:</SubTitle>
          <StartRegistrationButton
            onClick={() => history.push('/register/user-info')}
          >
            Start registration
          </StartRegistrationButton>
        </CardContent>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
