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
  }

  *, button, input {
    border: 0;
    background: none;
    outline: transparent;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--background);
  }

  :root {
    --primary: #272827;
    --secondary: #B7B7B7;
    --search: #CACACA;
    --white: #ffff;
    --gray: #C4C4C4;
    --dark-gray: #707070;
    --outline: #2F3336;
    --title-color: #272827;
    --subtitle-color: #858585;
    --green: #51A951;
    --red: #f44336;
    --yellow: #ffea00;
    --background: #F4F4F4;
  }
`;
