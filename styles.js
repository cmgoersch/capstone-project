import { createGlobalStyle } from "styled-components";
import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${merriweatherSans.style.fontFamily};
background: linear-gradient(10deg, rgba(29,113,184,1) 14%, rgba(45,46,131,1) 66%);
  }
`;
