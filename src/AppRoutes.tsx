import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Politicas } from "./pages/Politicas";
import { ScrollToTop } from "./utils/ScrollToTop";
import { Termos } from "./pages/Termos";

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/politicas" element={<Politicas />} />
                <Route path="/termos" element={<Termos />} />
            </Routes>
        </BrowserRouter>
    )
};