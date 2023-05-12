import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import Link from "next/link";
import data from "@/data.json";
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

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID:", id);

  if (!id) {
    return null;
  }
  const idPath = id.split("-");
  const friend = data.find((element) => element.id === idPath[0]);
  return (
    <>
      <Header />
      <StyledTitleText>Your friend of the day:</StyledTitleText>

      <FriendsPagePreview friend={friend} />
      <StyledFooter>
        <StyledLink href={`/contacts`}>back</StyledLink>
      </StyledFooter>
    </>
  );
}
