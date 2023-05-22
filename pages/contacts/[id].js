import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import styled from "styled-components";
import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledLinkBlack } from "@/components/Link/LinkBlack.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

export default function Details({ state }) {
  const router = useRouter();
  const { id, winning } = router.query;
  if (!id) {
    return null;
  }
  const idPath = id.split("-");
  const friend = state[idPath[0]];

  return (
    <>
      <Header />
      {winning === "true" && (
        <StyledTitleText>Your winning friend</StyledTitleText>
      )}

      <FriendsPagePreview friend={friend} />
      <StyledFooter>
        <StyledLinkBlack href={`/contacts`}>back</StyledLinkBlack>
        <StyledLink href={`/updateContact/${id}`}>
          Change <br /> data
        </StyledLink>
      </StyledFooter>
    </>
  );
}
