import styled from "styled-components";
import Link from "next/link";

export const StyledCleanLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:active {
    transform: scale(0.95);
    transition: transform 1s ease;
  }
`;
