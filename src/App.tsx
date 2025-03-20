import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { PageContainer } from "./Components/PageContainer";
import SplashScreen from "./Components/SplashScreen"; 
export const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      once: false,
    });
    const splashTimer = setTimeout(() => {
      setIsSplashVisible(false); 
    }, 3000);

    return () => clearTimeout(splashTimer); 
  }, []);

  return (
    <>
      {isSplashVisible && <SplashScreen />} 
      <PageContainer>
        <Navbar />
        <Main />
        <Footer />
      </PageContainer>
    </>
  );
};
