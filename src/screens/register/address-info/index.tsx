import React from 'react';
import FloatInput from '../../../app/components/FloatInput';

import { Container, Logo, Title, CardContent, Button } from './styles';

const AddressInfo: React.FC = () => {
  return (
    <Container>
      <Logo>Healthy Food</Logo>
      <CardContent>
        <Title>User information</Title>
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
