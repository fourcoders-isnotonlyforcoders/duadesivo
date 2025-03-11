import { MainContainer } from "./styles";
import { FirstSection } from "../FirstSection";
import { ServicesSection } from "../ServicesSection";
import { ProcessSection } from "../ProcessSection";
import { DepoimentsSection } from "../DepoimentsSection";
import { FormSection } from "../FormSection";
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <FirstSection />
      <ServicesSection/>
      <ProcessSection/>
      <DepoimentsSection/>
      <FormSection/>
    </MainContainer>
  );
};
