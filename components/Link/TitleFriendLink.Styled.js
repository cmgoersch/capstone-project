import styled from "styled-components";
import Link from "next/link";

export const StyledTitleFriendLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: white;
  border: 0.2rem solid green;
  background: rgb(0, 150, 64);
  background: radial-gradient(
    circle at 30% 107%,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
  );
  font-size: 0.7rem;
  padding: 0.7rem;
  aspect-ratio: 1;
  border-radius: 8rem;
  box-shadow: 0px 1px 5px -2px green;
  margin: 0.5rem 1rem 1rem 1rem;

  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 0rem;
  margin-top: -10rem;
  left: 0rem;

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
