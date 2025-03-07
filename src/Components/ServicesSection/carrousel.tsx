import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

export const Carrousel: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true, 
    initial: 0,
    slides: {
      perView: 4,
      spacing: 15, 
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1 }, 
      },
      "(max-width: 1024px)": {
        slides: { perView: 2 }, 
      },
    },
    drag: true
  });

  return (
    <KeenSliderContainer ref={sliderRef} className="keen-slider">
    <Slide className="keen-slider__slide ">1</Slide>
    <Slide className="keen-slider__slide ">2</Slide>
    <Slide className="keen-slider__slide ">3</Slide>
    <Slide className="keen-slider__slide ">4</Slide>
    <Slide className="keen-slider__slide ">5</Slide>
    <Slide className="keen-slider__slide ">6</Slide>
    <Slide className="keen-slider__slide ">7</Slide>
    <Slide className="keen-slider__slide ">8</Slide>
    <Slide className="keen-slider__slide ">10</Slide>
    <Slide className="keen-slider__slide ">11</Slide>
    <Slide className="keen-slider__slide ">12</Slide>
  </KeenSliderContainer>
  );
};

const KeenSliderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Slide = styled.div`
  height: 270px;
  border: 1px solid ;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
`;