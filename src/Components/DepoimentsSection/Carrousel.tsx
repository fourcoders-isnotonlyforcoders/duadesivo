import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const BrandImage = styled.img`
  width: 60%;
  object-fit: cover;
  height: auto;
  margin: 0;
  opacity: 0.7;
  transition: 0.3s ease;
  padding: 1rem 0;
  @media screen and (max-width: 708px) {
    margin: 0;
    width: 80%;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.04);
    filter: brightness(1.1);
  }
`;
const SliderContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  @media screen and (max-width: 708px) {
    margin: 0;
    width: 60%;
  }
`;

const animation = { duration: 22000, easing: (t: number) => t };

export const Carroussel: React.FC = () => {
  const numberOfCards = 14;
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 0,
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
    <SliderContainer ref={sliderRef} className="keen-slider">
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/dg.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/4c.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/taurus.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/gomes.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/hunx.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/inset.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/rota.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/mm.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/wb.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/images/balaclava.png" />
      </Slide>
    </SliderContainer>
  );
};
