import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import styled from "styled-components";
import Header from "@/components/Header";
import { StyledLinkBlack } from "@/components/Link/BlackLink.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { StyledBirthdayLink } from "@/components/Link/BirthdayLink.Styled";

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
  const friendId = idPath[0];
  const friend = state[friendId];

  return (
    <>
      <Header />
      {winning === "true" && (
        <StyledTitleText>Your winning friend</StyledTitleText>
      )}

      <FriendsPagePreview friend={friend} friendId={friendId} />
      <StyledFooter>
        <StyledLinkBlack href={`/contacts`}>Back</StyledLinkBlack>
        <StyledBirthdayLink href={`/updateContact/${id}`}>
          Change <br /> data
        </StyledBirthdayLink>
      </StyledFooter>
    </>
  );
}
