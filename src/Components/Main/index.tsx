import { MainContainer } from "./styles";
import { FirstSection } from "../FirstSection";
import { ServicesSection } from "../ServicesSection";
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <FirstSection />
      <ServicesSection/>
    </MainContainer>
  );
};
