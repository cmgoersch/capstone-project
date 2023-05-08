import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial;
background: linear-gradient(63deg, rgba(38,128,255,1) 13%, rgba(0,13,242,1) 58%);
  }
`;
