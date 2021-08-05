import React, { useContext, useRef } from 'react';
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
import { RegisterContext } from '../../../app/context/register-context/RegisterContext';
import { cpfMask, dateMask } from './masks';

const UserInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { state, dispatch } = useContext(RegisterContext);

  const handleSubmit: SubmitHandler<FormData> = (_) => {
    const userInfoData = formRef.current?.getData();
    dispatch({
      type: 'SET_REGISTER_DATA',
      payload: { data: userInfoData },
    });
    history.push('/register/address-info');
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
          <Input name="name" label="Name" defaultValue={state.data.name} />
          <Input
            name="birthDate"
            label="Birth date"
            defaultValue={state.data.birthDate}
            inputMask={dateMask}
          />
          <Input
            name="cpf"
            label="CPF"
            defaultValue={state.data.cpf}
            inputMask={cpfMask}
          />
          <Button>Continue</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
