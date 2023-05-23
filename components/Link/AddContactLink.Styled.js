import styled from "styled-components";
import Link from "next/link";

export const StyledAddContactLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  border: 0.2rem solid green;
  background: rgb(214, 214, 214);
  background: linear-gradient(
    273deg,
    rgba(214, 214, 214, 1) 21%,
    rgba(144, 144, 144, 1) 67%
  );
  font-size: 1rem;
  padding: 1.1rem 1.1rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 0.5rem 1rem 1rem 1rem;

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
