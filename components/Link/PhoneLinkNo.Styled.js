import styled from "styled-components";
import Link from "next/link";

export const StyledPhoneNoLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border: 0.2rem solid red;
  background: rgb(200, 0, 0);
  background: linear-gradient(
    273deg,
    rgba(200, 0, 0, 1) 13%,
    rgba(150, 0, 0, 1) 33%,
    rgba(100, 0, 0, 1) 64%
  );
  font-size: 1.3rem;
  padding: 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 0.5rem 1rem 0.5rem 1rem;
  width: 4.5rem;
  height: 4.5rem;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: white;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 1s ease;
  }
`;
