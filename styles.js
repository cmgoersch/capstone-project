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
background: linear-gradient(10deg, rgba(29,113,184,1) 14%, rgba(45,46,131,1) 66%);
  }
`;
