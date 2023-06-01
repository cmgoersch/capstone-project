import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: white;
  border: 0.2rem solid blue;
  border-color: green;
  background: rgb(0, 150, 64);
  background: linear-gradient(
    273deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
  );
  font-size: 0.8rem;
  padding: 0.7rem 0.7rem;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 1rem 1rem 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.7s ease;
  }
`;
