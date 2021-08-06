import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Swal from 'sweetalert2';
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
import { cepMask } from './masks';
import { cepRegex } from './validations';

const AddressInfo: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (_) => {
    try {
      formRef.current?.setErrors({});

      const data = formRef.current?.getData();

      const schema = Yup.object().shape({
        cep: Yup.string()
          .matches(
            cepRegex,
            'cep must match the following pattern: "99999-999"',
          )
          .required(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        address: Yup.string().required(),
        neighborhood: Yup.string().required(),
        number: Yup.string().required(),
        reference: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
        text: '',
        confirmButtonColor: '#BADC58',
        willClose: () => history.push('/'),
      });

      history.push('/');
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
          <Input name="state" label="State" disabled />
          <Input name="city" label="City" disabled />
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
