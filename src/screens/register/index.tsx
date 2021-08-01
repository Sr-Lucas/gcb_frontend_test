import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  StartRegistrationButton,
  RegisterContentWrapper,
  Logo,
  RegisterArtWrapper,
  RegisterArtImage,
  ContentWrapper,
} from './styles';

import RegisterArt from '../../assets/images/register_art.svg';

const Register: React.FC = () => {
  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <ContentWrapper>
        <RegisterArtWrapper>
          <RegisterArtImage src={RegisterArt} />
        </RegisterArtWrapper>
        <RegisterContentWrapper>
          <Title>The registration will take just a few steps!</Title>
          <SubTitle>You can start whenever you are ready:</SubTitle>
          <StartRegistrationButton>Start registration</StartRegistrationButton>
        </RegisterContentWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
