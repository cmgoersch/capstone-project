import data from "@/data.json";
import RandomFunction from "@/components/RandomFunction";
import FriendsPage from "@/components/FriendPages";
import FriendsPagPreview from "@/components/FriendPagePreview";
import Header from "@/components/Header";
import Link from "next/link";
import { StyledLink } from "@/components/Link/Link.Styled";
import styled from "styled-components";

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-wrap: wrap;
  text-align: center;
`;
export default function HomePage() {
  return (
    <div>
      <StyledIndex>
        <Header />
        <RandomFunction data={data} />
      </StyledIndex>
      <StyledLink href={`/contacts`}> Contacts</StyledLink>
    </div>
  );
}
