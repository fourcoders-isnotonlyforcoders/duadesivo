import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SplashScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;  
  transition: opacity 1s ease-out;
`;

const Logo = styled.img`
width: 170px;
height: auto;
animation: pulse 3s infinite;

@keyframes pulse{
  0%{
    transform: scale(1);
  }50%{
    transform: scale(1.2);

  }100%{
    transform: scale(1);
  }
}
`;

const SplashScreen: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (isLoaded) {
    return null; 
  }

  return (
    <SplashScreenWrapper>
      <Logo src="/public/images/DuLogo2.svg"/>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;