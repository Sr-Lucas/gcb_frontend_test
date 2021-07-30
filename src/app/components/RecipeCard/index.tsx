import React from 'react';
import { Container, Image, Content, Title, Button } from './styles';

interface RecipeCardProps {
  image: string;
  text: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,

  text,
}: RecipeCardProps) => {
  return (
    <Container>
      <Image src={image} />
      <Content>
        <Title size={30}>{text}</Title>
        <Button>See recipe</Button>
      </Content>
    </Container>
  );
};

export default RecipeCard;
