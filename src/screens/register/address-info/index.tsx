import React from 'react';
import { useHistory } from 'react-router-dom';
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

  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Header>
          <BackButton onClick={() => history.push('/register/user-info')} />
          <Title>User&apos;s Address information</Title>
        </Header>
        <FloatInput labelText="CEP" value="" onChange={() => {}} />
        <FloatInput labelText="State" value="" onChange={() => {}} />
        <FloatInput labelText="City" value="" onChange={() => {}} />
        <FloatInput labelText="Address" value="" onChange={() => {}} />
        <FloatInput labelText="Neighborhood" value="" onChange={() => {}} />
        <FloatInput labelText="Number" value="" onChange={() => {}} />
        <FloatInput labelText="Reference" value="" onChange={() => {}} />
        <Button>Register</Button>
      </CardContent>
    </Container>
  );
};

export default AddressInfo;
