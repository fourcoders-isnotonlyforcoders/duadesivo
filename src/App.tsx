import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SplashScreen from "./Components/SplashScreen"; 
import { AppRoutes } from "./AppRoutes";
import FormContextProvider from "./contexts/FormContext";

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
    <FormContextProvider>
      {isSplashVisible && <SplashScreen />} 
      <AppRoutes />
    </FormContextProvider>
  );
};
