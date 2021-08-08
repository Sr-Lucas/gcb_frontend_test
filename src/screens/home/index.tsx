import React, { createRef, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../../app/components/Search';
import { BookOpen, Columns, LogIn } from '../../styles/icons';
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
  Section,
  ScrollContainer,
  FooterWrapper,
  CopyrightText,
  NavigationBar,
  NavigationBarButton,
} from './styles';
import RecipeCard from '../../app/components/RecipeCard';

import Illustration from '../../assets/images/Illustration.png';
import Membership from '../../assets/images/membership.png';

import IllustrationWithoutBg from '../../assets/images/IllustrationWithoutBG.svg';
import HanshakeArt from '../../assets/images/handshake_art.svg';
import GirlCookingEggs from '../../assets/images/girl_cooking_eggs.svg';

import BlocoService from '../../assets/images/bloco-service.png';

import Comida1 from '../../assets/images/comida_1.svg';
import Comida2 from '../../assets/images/comida_2.svg';
import Comida3 from '../../assets/images/comida_3.svg';
import Comida4 from '../../assets/images/comida_4.svg';

import Blog1 from '../../assets/images/blog_image_1.svg';
import Blog2 from '../../assets/images/blog_image_2.svg';
import Blog3 from '../../assets/images/blog_image_3.svg';
import Blog4 from '../../assets/images/blog_image_4.svg';

import BlogCard from '../../app/components/BlogCard';

const Home: React.FC = () => {
  const scrollRef: any = createRef();

  const history = useHistory();

  const enableKeyboardCursorToScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  };

  const recipesSection = useRef<HTMLDivElement>(null);
  const blogSection = useRef<HTMLDivElement>(null);
  const joinSection = useRef<HTMLDivElement>(null);

  const gotoSection = (ref: React.RefObject<HTMLDivElement>) =>
    window.scrollTo({
      top: ref?.current?.offsetTop ?? 0,
      behavior: 'smooth',
    });

  const posts = [
    {
      id: 1,
      image: Blog1,
      title: 'Quick-start guide to nuts and seeds',
      author: {
        name: 'Kevin Ibrahim',
        avatar: 'https://i.pravatar.cc/300',
      },
    },
    {
      id: 2,
      image: Blog2,
      title: 'Nutrition: Tips for Improving Your Health',
      author: {
        name: 'Mike Jackson',
        avatar: 'https://i.pravatar.cc/300',
      },
    },
    {
      id: 3,
      image: Blog3,
      title: 'The top 10 benefits of eating healthy',
      author: {
        name: 'Bryan McGregor',
        avatar: 'https://i.pravatar.cc/300',
      },
    },
    {
      id: 4,
      image: Blog4,
      title: 'What Makes a Healthy Diet?',
      author: {
        name: 'Jashua',
        avatar: 'https://i.pravatar.cc/300',
      },
    },
  ];

  return (
    <>
      <Container backgroundArt={Illustration} artPosition="right">
        <ContentWrapper>
          <Header>
            <Logo>Healthy Food</Logo>
            <NavigationWrapper>
              <NavigatorHeaderButton
                onClick={() => gotoSection(recipesSection)}
              >
                HEALTHY RECIPES
              </NavigatorHeaderButton>
              <NavigatorHeaderButton onClick={() => gotoSection(blogSection)}>
                BLOG
              </NavigatorHeaderButton>
              <NavigatorHeaderButton onClick={() => gotoSection(joinSection)}>
                JOIN
              </NavigatorHeaderButton>
              <RegisterButton onClick={() => history.push('/register')}>
                REGISTER
              </RegisterButton>
            </NavigationWrapper>
          </Header>
          <Content align="left">
            <Title size={48}>Ready for Trying a new recipe?</Title>
            <SearchInput />
            <ShowcaseContainer>
              <BackDrop>
                <Image src={IllustrationWithoutBg} alt="" />
              </BackDrop>
            </ShowcaseContainer>
          </Content>
        </ContentWrapper>
      </Container>

      <Container ref={recipesSection}>
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
            <ShowcaseContainer>
              <BackDrop>
                <Image src={HanshakeArt} alt="" />
              </BackDrop>
            </ShowcaseContainer>
          </Content>
        </ContentWrapper>
      </Container>

      <Container ref={blogSection}>
        <ContentWrapper>
          <Content align="center">
            <TitleCenterTopWrapper>
              <Title size={32}>Read Our Blog</Title>
              <Text size={16}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
            </TitleCenterTopWrapper>
            <ScrollContainer vertical={false} horizontal>
              <Section onFocus={enableKeyboardCursorToScroll} ref={scrollRef}>
                {posts.map((post) => (
                  <BlogCard post={post} key={post.id} />
                ))}
              </Section>
            </ScrollContainer>
          </Content>
        </ContentWrapper>
      </Container>

      <Container
        backgroundArt={Membership}
        artPosition="right"
        ref={joinSection}
      >
        <ContentWrapper>
          <Content align="left">
            <TitleMembership size={32}>
              Join our membership to get special offer
            </TitleMembership>
            <MembershipInputWrapper>
              <MembershipInput placeholder="Enter you email address" />
              <MembershipButton>Join</MembershipButton>
            </MembershipInputWrapper>
            <ShowcaseContainer>
              <BackDrop>
                <Image src={GirlCookingEggs} alt="" />
              </BackDrop>
            </ShowcaseContainer>
          </Content>
        </ContentWrapper>
      </Container>

      <FooterWrapper>
        <CopyrightText>
          © Copyrights 2019 Stack. All Rights Reserved.
        </CopyrightText>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </FooterWrapper>

      <NavigationBar>
        <NavigationBarButton onClick={() => gotoSection(recipesSection)}>
          <BookOpen size={18} />
          <span>RECIPES</span>
        </NavigationBarButton>
        <NavigationBarButton onClick={() => gotoSection(blogSection)}>
          <Columns size={18} />
          <span>BLOG</span>
        </NavigationBarButton>
        <NavigationBarButton onClick={() => gotoSection(joinSection)}>
          <LogIn size={18} />
          <span>JOIN</span>
        </NavigationBarButton>
      </NavigationBar>
    </>
  );
};

export default Home;
