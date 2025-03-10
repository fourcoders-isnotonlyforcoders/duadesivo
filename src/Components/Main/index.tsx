import { MainContainer } from "./styles";
import { FirstSection } from "../FirstSection";
import { ServicesSection } from "../ServicesSection";
import { ProcessSection } from "../ProcessSection";
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <FirstSection />
      <ServicesSection/>
      <ProcessSection/>
    </MainContainer>
  );
};
