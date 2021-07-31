import React from 'react';
import styled from 'styled-components';

interface CarouselContainerProps {
  ref?: React.RefObject<HTMLDivElement> | null | undefined;
}

interface DotProps {
  key: number;
  active: boolean;
}

export const Container = styled.div``;

export const CarouselContainer = styled.div<CarouselContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollIndicatorContainer = styled.div``;

export const Dot = styled.div<DotProps>`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: black;
`;
