import React, { useEffect } from 'react';
import {
  CarouselContainer,
  Container,
  ScrollIndicatorContainer,
  Dot,
} from './styles';

interface CarouselProps {
  count: number;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  count,
}: CarouselProps) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const target: any = React.createRef();

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element: any = target.current;
    const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      setScrollProgress(0);
      return;
    }

    if (windowScroll > totalWidth) {
      setScrollProgress(100);
      return;
    }

    setScrollProgress((windowScroll / totalWidth) * 100);
  };

  const renderDots = () => {
    const selectedDotValue = (scrollProgress * count) / 100;
    return [count].map((index) => (
      <Dot
        key={index}
        active={selectedDotValue >= index && selectedDotValue <= index + 1}
      />
    ));
  };

  useEffect(() => {
    target.current.addEventListener('touchmove', scrollListener);
    return () =>
      target.current &&
      target.current.removeEventListener('touchmove', scrollListener);
  });

  return (
    <Container>
      <CarouselContainer ref={target}>{children}</CarouselContainer>
      <ScrollIndicatorContainer>{renderDots()}</ScrollIndicatorContainer>
    </Container>
  );
};

export default Carousel;
