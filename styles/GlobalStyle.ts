import { createGlobalStyle } from "styled-components";
import { families } from "@ui/tokens/fonts";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${families.sans};
  }

  a { color: inherit; }
  * { box-sizing: border-box; }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */
`;

export default GlobalStyle;
