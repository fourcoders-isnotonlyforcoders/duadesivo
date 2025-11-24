
import React from "react";
import { PageContainer } from "../Components/PageContainer";
import { Navbar } from "../Components/Navbar";
import { CalculatorSection } from "../Components/CalculatorSection";
import { Footer } from "../Components/Footer";
import { ButtonReturn } from "../Components/Button/Return";

export const Calculadora: React.FC = () => {
    return (
        <PageContainer>
            <Navbar readonly />
            <CalculatorSection />
            <Footer />
            <ButtonReturn to="/"/>
        </PageContainer>
    )
};

