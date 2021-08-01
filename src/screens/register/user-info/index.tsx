import React from 'react';
import { useHistory } from 'react-router-dom';
import FloatInput from '../../../app/components/FloatInput';
import BackButton from '../_components/BackButton';

import { Container, Logo, Title, CardContent, Button, Header } from './styles';

const UserInfo: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Header>
          <BackButton onClick={() => history.push('/register')} />
          <Title>User&apos;s information</Title>
        </Header>
        <FloatInput labelText="Name" value="" onChange={() => {}} />
        <FloatInput labelText="Birth date" value="" onChange={() => {}} />
        <FloatInput labelText="CPF" value="" onChange={() => {}} />
        <Button onClick={() => history.push('/register/address-info')}>
          Continue
        </Button>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
