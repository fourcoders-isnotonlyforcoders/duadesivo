import React from "react";
import { PageContainer } from "../Components/PageContainer";
import { Navbar } from "../Components/Navbar";
import { Main } from "../Components/Main";
import { Footer } from "../Components/Footer";

export const Home: React.FC = () => {
    return (
        <PageContainer>
            <Navbar />
            <Main />
            <Footer />
        </PageContainer>
    )
};