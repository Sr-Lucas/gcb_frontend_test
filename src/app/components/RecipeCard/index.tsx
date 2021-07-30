import React from 'react';
import { Container, Image, Content, Title, Button } from './styles';

interface RecipeCardProps {
  image: string;
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  index,
}: RecipeCardProps) => {
  return (
    <Container id={`recipe-card-${index}`}>
      <Image src={image} />
      <Content>
        <Title size={30}>Broccoli Salad with Bacon</Title>
        <Button>See recipe</Button>
      </Content>
    </Container>
  );
};

export default RecipeCard;
