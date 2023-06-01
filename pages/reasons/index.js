import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import Header from "@/components/Header";
import { StyledAddContactLink } from "@/components/Link/AddContactLink.Styled";
import { StyledBirthdayLink } from "@/components/Link/BirthdayLink.Styled";
import { StyledLinkBlack } from "@/components/Link/BlackLink.Styled";
import { StyledReasonsLink } from "@/components/Link/ReasonsLink";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIndex = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0rem 2rem 0rem 2rem;
  max-width: 375px;
`;

const StyledList = styled.ol`
  font-size: 0.8rem;
  font-weight: 100;
  text-align: justify;
  color: white;
  padding: 0rem 0rem 0rem 1.4rem;
  margin: 0;
`;

const StyledReasons = styled.li`
  margin: 0.8rem 0rem 0.8rem 0rem;
`;

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledSubText = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  text-align: justify;
  color: white;
  margin: 0;
`;

export default function Reasons() {
  return (
    <>
      <Header />
      <StyledTitleText>10 good reasons to call a friend</StyledTitleText>
      <StyledDiv>
        <StyledIndex>
          <StyledList>
            <StyledReasons>
              <b>Reconnect:</b> You might be surprised at the significant life
              events, growth, or changes your friends have experienced.
              It&apos;s a chance to catch up and learn more about their lives.
            </StyledReasons>
            <StyledReasons>
              <b>Mental Health:</b> Socializing can greatly benefit your mental
              health by providing companionship and support. It can also
              decrease feelings of loneliness and isolation.
            </StyledReasons>
            <StyledReasons>
              <b>Personal Growth:</b> Conversations with diverse individuals can
              offer new perspectives and ideas, which can help you grow
              personally and professionally.
            </StyledReasons>
            <StyledReasons>
              <b>Networking Opportunities:</b> Your friends might have
              opportunities or connections that could help you in your career or
              personal projects.
            </StyledReasons>
            <StyledReasons>
              <b>Shared Memories:</b> Revisiting shared memories can bring joy
              and nostalgia, and can also help strengthen your connections.
            </StyledReasons>
            <StyledReasons>
              <b>Emotional Support:</b> By rekindling friendships, you&apos;ll
              have more people to turn to for support during tough times.
            </StyledReasons>
            <StyledReasons>
              <b>Continued Learning:</b> You might find shared interests or
              common goals that could lead to collaborations on work or personal
              projects.
            </StyledReasons>
            <StyledReasons>
              <b>Potential Collaborations:</b> To reminisce: If you share fond
              memories with your friend, calling to reminisce can be a fun and
              nostalgic experience.
            </StyledReasons>
            <StyledReasons>
              <b>New Experiences:</b> Friends can introduce you to new
              activities, cultures, or cuisines, enriching your life experience.
            </StyledReasons>
            <StyledReasons>
              <b>Building Stronger Relationships:</b> The more you invest in
              your relationships, the stronger they become. Regular contact
              fosters a deeper connection and understanding between you and your
              friends.
            </StyledReasons>
          </StyledList>
          <StyledSubText>
            <b>Remember,</b> it&apos;s not about the quantity of friendships,
            but the quality. Reach out to those friends you genuinely care about
            and who bring positivity into your life.
          </StyledSubText>
        </StyledIndex>
        <StyledFooter>
          <StyledLinkBlack href={`/`}>Back</StyledLinkBlack>
          <StyledAddContactLink href={`/addContact`}>
            Add new <br />
            contact
          </StyledAddContactLink>
          <StyledBirthdayLink href={`/contacts`}>
            All <br /> friends
          </StyledBirthdayLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
