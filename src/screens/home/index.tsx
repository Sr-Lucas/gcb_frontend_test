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
  ShowcaseContainer,
  BackDrop,
  Image,
} from './styles';
import Illustration from '../../assets/images/IllustrationWithoutBG.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Logo>Healthy Food</Logo>
          <NavigationWrapper>
            <NavigatorHeaderButton>HEALTHY RECIPES</NavigatorHeaderButton>
            <NavigatorHeaderButton>BLOG</NavigatorHeaderButton>
            <NavigatorHeaderButton>JOIN</NavigatorHeaderButton>
            <RegisterButton>
              <span>REGISTER</span>
            </RegisterButton>
          </NavigationWrapper>
        </Header>
        <Content>
          <Title>Ready for Trying a new recipe?</Title>
          <Search />
          <ShowcaseContainer>
            <BackDrop />
            <Image src={Illustration} alt="" />
          </ShowcaseContainer>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
