import RandomFunction from "@/components/RandomFunction";
import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import FriendsCounter from "@/components/FriendsCounter";
import { StyledBirthdayLink } from "@/components/Link/BirthdayLink.Styled";
import { StyledReasonsLink } from "@/components/Link/ReasonsLink";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHomePage = styled.div`
  max-width: 375px;
`;

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

const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledReasons = styled.div`
  display: flex;
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
              Friendships want to be cultivated! Everyone is happy if you just
              get in touch. Who may be happy to hear you today?
            </StyledTitleText>
            <StyledCircle>
              <RandomFunction friendList={state} />
              <StyledReasons>
                <StyledReasonsLink href={`/reasons`}>
                  {" "}
                  10 resons <br /> to get in <br /> touch
                </StyledReasonsLink>
              </StyledReasons>
            </StyledCircle>
          </StyledIndex>
          <FriendsCounter state={state} />
        </StyledHomePage>
        <StyledFooter>
          <StyledLink href={`/contacts`}> All friends</StyledLink>
          <StyledBirthdayLink href={`/birthdays`}>
            {" "}
            Birthdays
          </StyledBirthdayLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
