import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Politicas } from "./pages/Politicas";
import { ScrollToTop } from "./utils/ScrollToTop";

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/politicas" element={<Politicas />} />
            </Routes>
        </BrowserRouter>
    )
};