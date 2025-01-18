import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { PageContainer } from "./Components/PageContainer";

export const App: React.FC = () => {
  return (
    <PageContainer>
      <Navbar title="Template React" />
      <Main />
      <Footer />
    </PageContainer>
  );
};
