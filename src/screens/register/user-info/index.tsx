import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';
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
import { cpfMask, dateMask } from './masks';
import { dateRegex, cpfRegex } from './validations';

const UserInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (_) => {
    try {
      formRef.current?.setErrors({});

      const data = formRef.current?.getData();

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        birthDate: Yup.string().matches(dateRegex).required(),
        cpf: Yup.string().matches(cpfRegex).required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/register/address-info');
    } catch (err) {
      const validationErrors: Record<string, string> = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error?.path as keyof typeof validationErrors] =
            error.message;
        });

        formRef?.current?.setErrors(validationErrors);
      }
    }
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
          <Input name="name" label="Name" />
          <Input name="birthDate" label="Birth date" inputMask={dateMask} />
          <Input name="cpf" label="CPF" inputMask={cpfMask} />
          <Button>Continue</Button>
        </Form>
      </CardContent>
    </Container>
  );
};

export default UserInfo;
