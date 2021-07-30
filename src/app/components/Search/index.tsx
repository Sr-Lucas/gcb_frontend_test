import React from 'react';
import { Container, SearchIcon, Button, Input } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search healthy recipes" />
      <Button>
        <SearchIcon size={20} />
      </Button>
    </Container>
  );
};

export default Search;
