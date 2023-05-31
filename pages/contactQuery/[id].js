import Header from "@/components/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { StyledQueryLink } from "@/components/Link/QueryLink.Styled";
import { StyledQueryButton } from "@/components/Button/ButtonQuery.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledWidth = styled.div`
  max-width: 375px;
  width: 375px;
`;

const StyledFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledNickname = styled.h2`
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  margin: -8px 0px 4px 0px;
`;

const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0px 0px 9px 0px;
`;

const StyledButtonContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default function ContactQuery({ state }) {
  const router = useRouter();
  const { id: friendId } = router.query;
  if (!friendId) {
    return null;
  }

  const friend = state[friendId];

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledWidth>
          <StyledFriend>
            <StyledButtonContainer>
              <Image
                src={friend ? friend.profileIconSource : ""}
                alt={friend ? friend.nickname : ""}
                width={140}
                height={140}
              />
            </StyledButtonContainer>
            <StyledTitleText>
              Have you reached your friend {friend ? friend.nickname : ""}?
            </StyledTitleText>
            <StyledFooter>
              <StyledQueryLink href={`/contactQuery/aplaus/${friendId}`}>
                Yes
              </StyledQueryLink>
              <StyledQueryLink href={`/contactQuery/comfort/${friendId}`}>
                No
              </StyledQueryLink>
              <StyledQueryButton onClick={() => router.back()}>
                Try <br /> again
              </StyledQueryButton>
            </StyledFooter>
          </StyledFriend>
        </StyledWidth>
      </StyledDiv>
    </>
  );
}
