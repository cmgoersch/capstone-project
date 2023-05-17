import styled from "styled-components";

export const StyledRandomButtonClicked = styled.button`
  display: inline-flex;
  align-items: center;
  color: white;
  border: 0.2rem solid lightgreen;
  background: linear-gradient(
    270deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(47, 172, 102, 1) 29%,
    rgba(0, 102, 51, 1) 58%
  );
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
