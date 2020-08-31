import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 197px;
    background: rgba(0,0,0,0.35);
    transform: initial;
    &:before {
      font-size: 30px;
    }
    opacity:0;
    transition:400ms;
    &:hover{
      opacity:1;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }: any) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 