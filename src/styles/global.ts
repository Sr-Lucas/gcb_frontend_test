import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    @media (max-width: 600px) {
      display: flex;
    }
  }

  *, button, input {
    border: 0;
    background: none;
    outline: transparent;
    font-family: 'Montserrat';
  }

  html {
    background: var(--background-primary);
  }

  :root {
    --primary: #BADC58;
    --secondary: #FFFFFF;
    --white: #ffff;
    --title-color: #1D164D;
    --subtitle-color: #1D164D;
    --text-color: #9E9BAF;
    --background-primary: #FFFFFF;
    --background-secondary: #FAFAFC;

    --default-height: 768px;
  }
`;
