import React from "react";
import { PageContainer } from "../Components/PageContainer";
import { Navbar } from "../Components/Navbar";
import { ButtonReturn } from "../Components/Button/Return";
import { TermosContent } from "../Components/TermosContent";

export const Termos: React.FC = () => {
    return (
        <PageContainer>
            <Navbar readonly />
            <TermosContent />
            <ButtonReturn to="/"/>
        </PageContainer>
    );
};