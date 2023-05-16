import FriendPages from "@/components/FriendPages";
import Header from "@/components/Header";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "@/components/Link/Link.Styled";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

export default function Contacts() {
  return (
    <>
      <Header />
      <StyledTitleText>Your circle of friends</StyledTitleText>
      <FriendPages />
      <StyledFooter>
        <StyledLink href={`/`}>back</StyledLink>
        <StyledLink href={`/addContact`}>
          Add new <br />
          contact
        </StyledLink>
      </StyledFooter>
    </>
  );
}
