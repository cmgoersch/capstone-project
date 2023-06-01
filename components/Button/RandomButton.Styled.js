import styled from "styled-components";

export const StyledRandomButton = styled.button`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  border: 0.2rem solid green;

  background: rgb(0, 150, 64);
  background: radial-gradient(
    circle at 30% 107%,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
  );

  font-size: 0.8rem;
  padding: 1rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 1rem;
  width: 11rem;
  height: 11rem;

  &:hover {
    cursor: pointer;
  }
`;
