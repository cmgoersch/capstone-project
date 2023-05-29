import styled from "styled-components";
import Link from "next/link";

export const StyledLinkBlack = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: white;
  border: 0.2rem solid green;
  background: rgb(77, 77, 77);
  background: linear-gradient(
    273deg,
    rgba(77, 77, 77, 1) 14%,
    rgba(32, 32, 32, 1) 58%
  );

  font-size: 0.8rem;
  padding: 0.7rem 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 0.5rem 1rem 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: white;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.6s ease;
  }
`;
