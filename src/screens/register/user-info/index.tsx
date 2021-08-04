import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Input from '../../../app/components/Input';

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
  // const { data } = useAppSelector(selectRegister);
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (_) => {};

  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Header>
          <BackButton onClick={() => history.push('/register')} />
          <Title>User&apos;s information</Title>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input name="name" label="Name" />
          <Input name="birthDate" label="Birth date" />
          <Input name="cpf" label="CPF" />
          <Button>Continue</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
