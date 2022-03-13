import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  :root {
    --blue-800: #1E144D;
    --blue-300: #2FABB5;
    --white: #ffffff;
    --gray-200: #cfcfcf;
    --gray-500: #A2A0A0;
    --yellow-500: #FFAE00;
  }

  body {
    background: var(--blue-800);
    color: var(--white);
  }

  body, button, select, textarea, input {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;