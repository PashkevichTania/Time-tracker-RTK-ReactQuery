import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 100px;
  }

  select { 
    width: 200px; 
    text-align-last:center; 
  }
`;
