import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-size: 10px;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
