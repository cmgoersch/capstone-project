import styled from "styled-components";
import Link from "next/link";

export const StyledAddContactLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  border: 0.2rem solid darkgray;
  background: rgb(190, 190, 190);
  background: radial-gradient(
    circle at 30% 107%,
    rgba(190, 190, 190, 1) 13%,
    rgba(199, 199, 199, 1) 34%,
    rgba(227, 227, 227, 1) 58%
  );

  font-size: 1rem;
  padding: 1.1rem 1.1rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 0.5rem 1rem 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: black;
    font-weight: bold;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 1s ease;
  }
`;
