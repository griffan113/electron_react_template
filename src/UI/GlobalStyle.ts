import { createGlobalStyle } from 'styled-components';

export const GlobalStyling = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #393939;
  }
`
