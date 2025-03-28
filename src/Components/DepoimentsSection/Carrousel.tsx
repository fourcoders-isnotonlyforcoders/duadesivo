import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const BrandImage = styled.img`
  width: 50%;
  object-fit: cover;
  height: auto;
  margin: 0;
  opacity: .4;
  transition: 0.3s ease;
  padding: 1rem 0;
  @media screen and (max-width: 708px) {
  margin: 0;
  width: 80%;
}
  &:hover{
    opacity: 1;
    transform: scale(1.02);
    filter: brightness(1.2);
  }
`;
const SliderContainer = styled.div`
  width: auto;
  padding: 1rem 0.4rem ;
`;

const Slide = styled.div`
display: flex;
justify-content: center;
width: 50%;
height: 50%;
margin: 0;
margin-right: -55px;
@media screen and (max-width: 708px) {
  margin: 0;
  width: 60%;
}
`;

const animation = { duration: 30000, easing: (t: number) => t };

export const Carroussel: React.FC = () => {
  const numberOfCards = 10;
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 3,
      spacing: 1,
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
      {([...Array(10)].map((_, index) => (
        <Slide className="keen-slider__slide">
          <BrandImage src={index % 2 < 1 ? "/images/dg.png" : "/images/taurus.png"} />
        </Slide>
      )))}
    </SliderContainer>
  );
};
