import React from 'react';
import Search from '../../app/components/Search';
import {
  Container,
  ContentWidthContraint,
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
  Text,
  Button,
  MembershipInputWrapper,
  MembershipInput,
  TitleMembership,
  MembershipButton,
} from './styles';
import RecipeCard from '../../app/components/RecipeCard';

import Illustration from '../../assets/images/Illustration.png';
import Membership from '../../assets/images/membership.png';
import IllustrationWithoutBg from '../../assets/images/IllustrationWithoutBG.svg';

import BlocoService from '../../assets/images/bloco-service.png';

import Comida1 from '../../assets/images/comida_1.svg';
import Comida2 from '../../assets/images/comida_2.svg';
import Comida3 from '../../assets/images/comida_3.svg';
import Comida4 from '../../assets/images/comida_4.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container backgroundArt={Illustration} artPosition="right">
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
              <Text size={16}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
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

      <Container backgroundArt={BlocoService} artPosition="left">
        <ContentWrapper>
          <Content align="right">
            <ContentWidthContraint>
              <Title size={32}>The best services ready To serve you</Title>
              <Text size={16}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
              <Text size={16}>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </Text>
              <Text size={16}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </Text>
            </ContentWidthContraint>
            <Button>Know more</Button>
          </Content>
        </ContentWrapper>
      </Container>

      <Container>
        <ContentWrapper>
          <Content align="center">
            <TitleCenterTopWrapper>
              <Title size={32}>Read Our Blog</Title>
              <Text size={16}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
            </TitleCenterTopWrapper>
          </Content>
        </ContentWrapper>
      </Container>

      <Container backgroundArt={Membership} artPosition="right">
        <ContentWrapper>
          <Content align="left">
            <TitleMembership size={32}>
              Join our membership to get special offer
            </TitleMembership>
            <MembershipInputWrapper>
              <MembershipInput placeholder="Enter you email address" />
              <MembershipButton>Join</MembershipButton>
            </MembershipInputWrapper>
          </Content>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Home;
