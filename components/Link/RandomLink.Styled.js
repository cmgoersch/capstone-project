import styled from "styled-components";
import Link from "next/link";
export const StyledRandomLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: white;
  border: 0.2rem solid green;
  background: rgb(0, 150, 64);
  background: linear-gradient(
    273deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
  );
  font-size: 1rem;
  padding: 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 1rem;

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
