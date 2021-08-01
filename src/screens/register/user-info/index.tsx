import React from 'react';
import FloatInput from '../../../app/components/FloatInput';

import { Container, Logo, Title, CardContent, Button } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Title>User information</Title>
        <FloatInput labelText="Name" value="" onChange={() => {}} />
        <FloatInput labelText="Birth date" value="" onChange={() => {}} />
        <FloatInput labelText="CPF" value="" onChange={() => {}} />
        <Button>Continue</Button>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
