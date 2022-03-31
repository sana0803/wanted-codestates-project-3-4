import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  //style reset
  ${reset}

  body {
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  :root {
    --main-color: #1276F0;
    --blue: #659DF9;
    --red: #D80404;
    --green: #6AE0AA;
    --purple: #7F73B0;
    --gray: #9FA0A6;
    --light-gray: #F7F6FB;
  }
`;

export default GlobalStyles;
