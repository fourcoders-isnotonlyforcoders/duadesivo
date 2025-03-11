import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const BrandImage = styled.img`
  width: 4rem;
  object-fit: cover;
  height: auto;
  margin: 0;
  opacity: .4;
  transition: 0.3s ease;
  &:hover{
    opacity: 1;
    transform: scale(1.1);
    filter: brightness(2);
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  padding: 1rem 0.4rem ;
`;

const Slide = styled.div`
display: flex;
justify-content: center;
width: auto;
padding: 1rem 0;
`;

const animation = { duration: 5000, easing: (t: number) => t };

export const Carroussel: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
      <Slide className="keen-slider__slide">
        <BrandImage src="/icons/example.png" />
      </Slide>
    </SliderContainer>
  );
};
