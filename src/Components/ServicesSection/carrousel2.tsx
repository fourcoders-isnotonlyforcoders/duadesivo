import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SlideInfos, SlideSub, SlideTitle, Icon } from "./carrousel";
import styled from "styled-components";

const animation = { duration: 30000, easing: (t: number) => t };

export const Carrousel2: React.FC = () => {
  const numberOfCards = 9;
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
      s.moveToIdx(numberOfCards - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
  });

  return (
    <>
      <InfoContainer>
        <Title data-aos="fade-right" data-aos-duration="600"> Produtos </Title>
      </InfoContainer>

      <KeenSliderContainer ref={sliderRef} className="keen-slider"  data-aos="fade-left" data-aos-duration="600">
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/card.svg" />
            <SlideTitle>Cartelas Temáticas</SlideTitle>
            <SlideSub>
              Cartelas com designs exclusivos para todos os gostos e estilos de vida.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/car.svg" />
            <SlideTitle>Adesivos de Carro</SlideTitle>
            <SlideSub>
              Adesivos resistentes e estilosos, ideais para personalizar seu veículo.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/moto.svg" />
            <SlideTitle>Adesivos de Moto</SlideTitle>
            <SlideSub>
              Personalize sua moto com adesivos modernos e de alta qualidade.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/bike.svg" />
            <SlideTitle>Adesivos de Bike</SlideTitle>
            <SlideSub>
              Designs únicos para deixar sua bike ainda mais estilosa e personalizada.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/skate.png" />
            <SlideTitle>Adesivos de Skate</SlideTitle>
            <SlideSub>
              Adesivos duráveis e com estilo para dar um toque pessoal ao seu skate.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/music.svg" />
            <SlideTitle>Adesivos de Bandas</SlideTitle>
            <SlideSub>
              Mostre seu amor pela música com adesivos das suas bandas favoritas.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/tv.svg" />
            <SlideTitle>Adesivos de Desenhos</SlideTitle>
            <SlideSub>
              Personalize seu espaço com adesivos de desenhos e personagens icônicos.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/personalize.svg" />
            <SlideTitle>Personalizados</SlideTitle>
            <SlideSub>
              Crie adesivos totalmente personalizados para você e seus amigos.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/holo.svg" />
            <SlideTitle>Adesivos Holográficos</SlideTitle>
            <SlideSub>
              Dê um toque especial aos seus objetos com adesivos holográficos incríveis.
            </SlideSub>
          </SlideInfos>
        </Slide>
        <Slide className="keen-slider__slide ">
          <SlideInfos>
            <Icon src="/icons/vinil.svg" />
            <SlideTitle>Adesivos em Vinil</SlideTitle>
            <SlideSub>
              Adesivos resistentes e de alta qualidade para decorar qualquer superfície.
            </SlideSub>
          </SlideInfos>
        </Slide>
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
  border: 2px solid ;
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
margin:  auto;
padding: 0;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  padding: 2rem 0 0 0 ;
  font-family: 'Montserrat';
  background: linear-gradient(to right, #ffcc00, #FF7D02);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;