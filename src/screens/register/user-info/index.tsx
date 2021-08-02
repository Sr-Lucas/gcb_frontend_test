import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import FloatInput from '../../../app/components/FloatInput';

import {
  Container,
  Logo,
  Title,
  CardContent,
  Button,
  Header,
  BackButton,
} from './styles';

const UserInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (_) => {
    // eslint-disable-next-line no-console
    console.log(formRef);
  };

  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Header>
          <BackButton onClick={() => history.push('/register')} />
          <Title>User&apos;s information</Title>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FloatInput name="name" label="Name" onChange={() => {}} />
          <FloatInput name="birthDate" label="Birth date" onChange={() => {}} />
          <FloatInput name="cpf" label="CPF" onChange={() => {}} />
          <Button onClick={() => history.push('/register/address-info')}>
            Continue
          </Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
