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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;