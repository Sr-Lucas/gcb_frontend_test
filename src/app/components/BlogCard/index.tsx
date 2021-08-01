import React from 'react';
import Post from '../../model/Post';

import {
  Container,
  Image,
  Title,
  AuthorWrapper,
  AuthorImage,
  AuthorName,
} from './styles';

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }: BlogCardProps) => {
  return (
    <Container>
      <Image src={post.image} />
      <Title size={25}>{post.title}</Title>
      <AuthorWrapper>
        <AuthorImage src={post.author.avatar} />
        <AuthorName>{post.author.name}</AuthorName>
      </AuthorWrapper>
    </Container>
  );
};

export default BlogCard;
