import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
   html,
   body, .root {
     font-size: 16px;
     min-height: 100vh;

     padding: 0;
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
       Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   }

   a {
     color: inherit;
     text-decoration: none;
   }

   * {
     box-sizing: border-box;
     outline: none;
     font-weight: 400;
     font-family: 'Montserrat';
   }

   button {
     border: none;
     background: none;
     font-family: 'Muli';
     font-size: 16px;
     font-weight: bold;
     cursor: pointer;
   }

   span {
    color: var(--text-color);
   }

   input {
     border-style: none;
   }

   @font-face {
    font-family: 'Montserrat';
    src: url('/Montserrat-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
     font-family: 'Montserrat';
     src: url('/Montserrat-Bold.ttf');
     font-weight: bold;
     font-style: normal;
   }

   @font-face {
     font-family: 'Muli';
     src: url('/Muli.ttf');
     font-weight: 400;
     font-style: normal;
   }

   @font-face {
     font-family: 'Muli';
     src: url('/Muli-Bold.ttf');
     font-weight: bold;
     font-style: normal;
   }

   @keyframes shake {
    0% {
      transform: translate(0.5px, 0.5px) rotate(0deg);
    }
    10% {
      transform: translate(-0.5px, -1px) rotate(-1deg);
    }
    20% {
      transform: translate(-1.5px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1.5px, 1px) rotate(0deg);
    }
    40% {
      transform: translate(0.5px, -0.5px) rotate(1deg);
    }
    50% {
      transform: translate(-0.5px, 1px) rotate(-1deg);
    }
    60% {
      transform: translate(-1.5px, 0.5px) rotate(0deg);
    }
    70% {
      transform: translate(1.5px, 0.5px) rotate(-1deg);
    }
    80% {
      transform: translate(-0.5px, -0.5px) rotate(1deg);
    }
    90% {
      transform: translate(0.5px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(0.5px, -1px) rotate(-1deg);
    }
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
