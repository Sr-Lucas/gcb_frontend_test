import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Swal from 'sweetalert2';
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
import { cepMask } from './masks';

const AddressInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (_) => {
    Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado com sucesso!',
      text: '',
      confirmButtonColor: '#BADC58',
      willClose: () => history.push('/'),
    });

    history.push('/');
  };

  // const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Header>
          <BackButton onClick={() => history.push('/register/user-info')} />
          <Title>User&apos;s Address information</Title>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input name="cep" label="CEP" inputMask={cepMask} />
          <Input name="state" label="State" />
          <Input name="city" label="City" />
          <Input name="address" label="Address" disabled />
          <Input name="neighborhood" label="Neighborhood" disabled />
          <Input name="number" label="Number" />
          <Input name="reference" label="Reference" />
          <Button>Register</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default AddressInfo;
