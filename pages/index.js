import RandomFunction from "@/components/RandomFunction";
import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import FriendsCounter from "@/components/FriendsCounter";
import { StyledBirthdayLink } from "@/components/Link/BirthdayLink.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHomePage = styled.div`
  max-width: 375px;
`;

const StyledTitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 0.9rem;
  margin: 1.4rem;
`;

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledReasons = styled.div`
  display: flex;
  position: absolute;
`;

export default function HomePage({ state }) {
  if (!state) {
    return null;
  }
  return (
    <>
      <Header />
      <StyledDiv>
        <StyledHomePage>
          <StyledIndex>
            <StyledTitleText>
              Friendships need to be cultivated! Everyone is happy if you just
              get in touch. Who would happy to hear from you today?
            </StyledTitleText>
            <StyledCircle>
              <RandomFunction friendList={state} />
            </StyledCircle>
          </StyledIndex>
          <FriendsCounter state={state} />
        </StyledHomePage>
        <StyledFooter>
          <StyledBirthdayLink href={`/contacts`}>
            {" "}
            All friends
          </StyledBirthdayLink>
          <StyledBirthdayLink href={`/birthdays`}>Birthdays</StyledBirthdayLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
