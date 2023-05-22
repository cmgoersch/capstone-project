import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import styled from "styled-components";
import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

export default function Details({ state }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null;
  }
  const idPath = id.split("-");

  // find id in list
  // const friend = state.find((element) => element.id == idPath[0]);

  // get friend data in object from id
  const friend = state[idPath[0]];

  return (
    <>
      <Header />
      <StyledTitleText>Your friend of the day:</StyledTitleText>

      <FriendsPagePreview friend={friend} />
      <StyledFooter>
        <StyledLink href={`/contacts`}>back</StyledLink>
        <StyledLink href={`/updateContact/${id}`}>change data</StyledLink>
      </StyledFooter>
    </>
  );
}
