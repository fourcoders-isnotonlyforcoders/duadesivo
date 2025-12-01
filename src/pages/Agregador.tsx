import React from "react";
import { PageContainer } from "../Components/PageContainer";
import { Navbar } from "../Components/Navbar";
import { AgregadorContent } from "../Components/AgregadorContent";

export const Agregador: React.FC = () => {
    return (
        <PageContainer>
            <Navbar readonly />
            <AgregadorContent />
        </PageContainer>
    );
};





