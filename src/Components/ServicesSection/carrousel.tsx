import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
const animation = { duration: 4000, easing: (t: number) => t };
export const Carrousel: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: 4, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created(s) {
      s.moveToIdx(-1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
  });

  return (
    <>
      <InfoContainer>
        <Title data-aos="fade-right" data-aos-duration="600"> Serviços</Title>
      </InfoContainer>
      <KeenSliderContainer ref={sliderRef} className="keen-slider"  data-aos="fade-right" data-aos-duration="600">
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
    </>
  );
};

const KeenSliderContainer = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
`;

const Slide = styled.div`
  height: 250px;
  border: 2px solid;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  transition: border 0.3s ease;

  &:hover{
    border: 2px solid ${(props) => props.theme.colors.yellow};
  }
`;
const InfoContainer = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 0;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  font-family: 'Montserrat';
  background: linear-gradient(to right, #ffcc00, #FF7D02);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
