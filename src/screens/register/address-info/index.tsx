import React, { useContext, useRef } from 'react';
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
import { RegisterContext } from '../../../app/context/register-context/RegisterContext';
import { cepMask } from './masks';

const AddressInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { state, dispatch } = useContext(RegisterContext);

  const handleSubmit: SubmitHandler<FormData> = (_) => {
    const addressInfoData = formRef.current?.getData();

    dispatch({
      type: 'SET_REGISTER_DATA',
      payload: { data: addressInfoData },
    });

    dispatch({ type: 'SAVE_USER' });

    Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado com sucesso!',
      text: '',
      confirmButtonColor: '#BADC58',
      willClose: () => history.push('/'),
    });

    history.push('/');
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
          <Input
            name="cep"
            label="CEP"
            defaultValue={state.data.cep}
            inputMask={cepMask}
          />
          <Input
            name="state"
            label="State"
            defaultValue={state.data.state}
            disabled
          />
          <Input
            name="city"
            label="City"
            defaultValue={state.data.city}
            disabled
          />
          <Input
            name="address"
            label="Address"
            defaultValue={state.data.address}
            disabled
          />
          <Input
            name="neighborhood"
            label="Neighborhood"
            defaultValue={state.data.neighborhood}
            disabled
          />
          <Input
            name="number"
            label="Number"
            defaultValue={state.data.number}
          />
          <Input
            name="reference"
            label="Reference"
            defaultValue={state.data.reference}
          />
          <Button>Register</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default AddressInfo;
