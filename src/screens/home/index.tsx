import React from 'react';
import Search from '../../app/components/Search';
import {
  Container,
  ContentWrapper,
  Header,
  Logo,
  NavigationWrapper,
  NavigatorHeaderButton,
  Content,
  RegisterButton,
  Title,
  TitleCenterTopWrapper,
  ShowcaseContainer,
  BackDrop,
  Image,
  RecipeGrid,
} from './styles';

import Illustration from '../../assets/images/Illustration.png';
import IllustrationWithoutBg from '../../assets/images/IllustrationWithoutBG.svg';
import RecipeCard from '../../app/components/RecipeCard';

import Comida1 from '../../assets/images/comida_1.svg';
import Comida2 from '../../assets/images/comida_2.svg';
import Comida3 from '../../assets/images/comida_3.svg';
import Comida4 from '../../assets/images/comida_4.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container backgroundArt={Illustration}>
        <ContentWrapper>
          <Header>
            <Logo>Healthy Food</Logo>
            <NavigationWrapper>
              <NavigatorHeaderButton>HEALTHY RECIPES</NavigatorHeaderButton>
              <NavigatorHeaderButton>BLOG</NavigatorHeaderButton>
              <NavigatorHeaderButton>JOIN</NavigatorHeaderButton>
              <RegisterButton>REGISTER</RegisterButton>
            </NavigationWrapper>
          </Header>
          <Content align="left">
            <Title size={48}>Ready for Trying a new recipe?</Title>
            <Search />
            <ShowcaseContainer>
              <BackDrop>
                <Image src={IllustrationWithoutBg} alt="" />
              </BackDrop>
            </ShowcaseContainer>
          </Content>
        </ContentWrapper>
      </Container>

      <Container>
        <ContentWrapper>
          <Content align="center">
            <TitleCenterTopWrapper>
              <Title size={32}>Our Best Recipes</Title>
            </TitleCenterTopWrapper>
            <RecipeGrid>
              <RecipeCard image={Comida1} text="Broccoli Salad with Bacon" />
              <RecipeCard image={Comida2} text="Classic Beef Burgers" />
              <RecipeCard image={Comida3} text="Classic Potato Salad" />
              <RecipeCard image={Comida4} text="Cherry Cobbler on the Grill" />
            </RecipeGrid>
          </Content>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Home;
