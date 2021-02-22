import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      font-size: 62.5%;
      font-family: 'Josefin Sans', sans-serif;
      min-height: 100vh;
      width: 100%;
      background-color: #1e2140;
      text-align: center;
      overflow: hidden;
  }
`;
