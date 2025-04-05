import React from "react";
import { Navbar } from "../Components/Navbar";
import { PoliticasContent } from "../Components/PoliticasContent";
import { ButtonReturn } from "../Components/Button/Return";
import { PageContainer } from "../Components/PageContainer";

export const Politicas: React.FC = () => {
    return (
        <PageContainer>
            <Navbar readonly />
            <PoliticasContent />
            <ButtonReturn to="/"/>
        </ PageContainer>
    )
};