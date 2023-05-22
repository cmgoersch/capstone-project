import styled from "styled-components";

export const StyledButtonRed = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: white;
  border: 0.2rem solid blue;
  border-color: #ff0000;
  background: rgb(255, 111, 111);
  background: linear-gradient(
    273deg,
    rgba(255, 111, 111, 1) 27%,
    rgba(255, 0, 0, 1) 70%
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
