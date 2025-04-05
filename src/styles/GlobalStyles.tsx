import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');

html,
body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.5rem;
        background-color: ${({ theme }) => theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.yellow};
    }

    ::-moz-selection {
        background: ${({ theme }) => theme.colors.yellowOpacity55};
        color: #fff;
        text-shadow: none;
    }
    &::selection {
        background: ${({ theme }) => theme.colors.yellowOpacity55};
        color: #fff;
        text-shadow: none;
    }
}

.toastify {
    font-size: 1.2rem;
}
`;
