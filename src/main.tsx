import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className={"toastify"}
      />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
