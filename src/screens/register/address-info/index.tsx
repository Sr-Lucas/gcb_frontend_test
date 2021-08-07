import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { consultarCep } from 'correios-brasil';
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
import { cepRegex, validateCep } from './validations';

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

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateCep(e.target.value)) {
      try {
        const cep = e.target.value.replace(/\D/, '');

        const response = await consultarCep(cep);

        if (response) {
          formRef?.current?.setData({
            state: response.uf,
            city: response.localidade,
            address: response.logradouro,
            neighborhood: response.bairro,
          });
        }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops! Something went wrong!',
          text: 'We did not get a response from the server.',
          confirmButtonColor: '#f00',
        });
      }
    }
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
            inputMask={cepMask}
            onChange={handleCepChange}
          />
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
