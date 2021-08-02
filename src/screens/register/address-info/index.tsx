import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
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

const AddressInfo: React.FC = () => {
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
          <BackButton onClick={() => history.push('/register/user-info')} />
          <Title>User&apos;s Address information</Title>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FloatInput name="cep" label="CEP" onChange={() => {}} />
          <FloatInput name="state" label="State" onChange={() => {}} />
          <FloatInput name="city" label="City" onChange={() => {}} />
          <FloatInput name="address" label="Address" onChange={() => {}} />
          <FloatInput
            name="neighborhood"
            label="Neighborhood"
            onChange={() => {}}
          />
          <FloatInput name="number" label="Number" onChange={() => {}} />
          <FloatInput name="reference" label="Reference" onChange={() => {}} />
          <Button>Register</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default AddressInfo;
