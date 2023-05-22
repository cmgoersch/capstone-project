import styled from "styled-components";

export const StyledButtonBlack = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: white;
  border: 0.2rem solid blue;
  border-color: green;
  background: rgb(77, 77, 77);
  background: linear-gradient(
    273deg,
    rgba(77, 77, 77, 1) 14%,
    rgba(32, 32, 32, 1) 58%
  );
  font-size: small;
  padding: 0.5rem 0.5rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.7s ease;
  }
`;
