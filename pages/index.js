import data from "@/data.json";
import RandomFunction from "@/components/RandomFunction";
import FriendsPage from "@/components/FriendPages";
import FriendsPagPreview from "@/components/FriendPagePreview";
import Header from "@/components/Header";
import Link from "next/link";
import { StyledLink } from "@/components/Link/Link.Styled";

import styled from "styled-components";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

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
        <StyledTitleText>
          Friendships want to be cultivated! Everyone is happy if you just get
          in touch. Who may be happy to hear you today?
        </StyledTitleText>
        <RandomFunction data={data} />
      </StyledIndex>
      <StyledLink href={`/contacts`}> Contacts</StyledLink>
    </div>
  );
}
