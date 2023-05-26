import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledReasonsLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bolder;
  border: 0.2rem solid green;
  background: rgb(214, 214, 214);
  background: linear-gradient(
    273deg,
    rgba(214, 214, 214, 1) 21%,
    rgba(144, 144, 144, 1) 67%
  );
  font-size: 0.8rem;
  padding: 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
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

  ${(isStatic) =>
    isStatic &&
    css`
      position: absolute;
      width: 5rem;
      height: 5rem;
      top: 27.5rem;
      left: 1rem;
    `}
`;
