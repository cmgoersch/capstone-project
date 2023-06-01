import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledReasonsLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bolder;
  border: 0.2rem solid darkgray;
  background: rgb(190, 190, 190);
  background: radial-gradient(
    circle at 30% 107%,
    rgba(190, 190, 190, 1) 13%,
    rgba(199, 199, 199, 1) 34%,
    rgba(227, 227, 227, 1) 58%
  );

  font-size: 0.8rem;
  padding: 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px gray;
  margin: 0.5rem 1rem 1rem 1rem;
  z-index: 200;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: black;
    font-weight: bolder;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 1s ease;
  }

  ${(props) =>
    props?.isstatic &&
    css`
      position: absolute;

      top: 0rem;
      margin-top: -4.8rem;
      left: -0.2rem;
    `}
`;
