import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { useEffect } from "react";
import { useState } from "react";
import { StyledPhoneLink } from "@/components/Link/PhoneLink.Styled";
import { StyledPhoneNoLink } from "@/components/Link/PhoneLinkNo.Styled";
import { keyframes } from "styled-components";

const StyledPhonePage = styled.div`
  background-color: lightgray;
  margin: 0;
  min-height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleText = styled.p`
  color: black;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledTitleTextFriend = styled.p`
  color: black;
  text-align: center;
  font-size: 2rem;
  margin: -1rem 0 2rem 0;
`;

const swing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StyledTitleEmiji = styled.p`
  color: white;
  text-align: center;
  font-size: 7rem;
  z-index: 50;
  margin: 0rem 0px 0px 0px;
  animation: ${swing} 2s infinite;
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
  margin: 4rem 0rem 0rem 5rem;
`;

export default function Phone({ state }) {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const router = useRouter();
  const { id: friendId } = router.query;
  if (!friendId) {
    return null;
  }

  const friend = state[friendId];

  return (
    <StyledPhonePage>
      {/* <Header /> */}

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
            <StyledTitleEmiji>📞</StyledTitleEmiji>
            <StyledTitleText>You are Calling</StyledTitleText>
            <StyledTitleTextFriend>
              {friend ? friend.nickname : ""}
            </StyledTitleTextFriend>

            <StyledFooter>
              <StyledPhoneLink href={`/contactQuery/${friendId}`}>
                ✓
              </StyledPhoneLink>
              <StyledPhoneNoLink href={`/contactQuery/${friendId}`}>
                ✘
              </StyledPhoneNoLink>
            </StyledFooter>
          </StyledFriend>
        </StyledWidth>
      </StyledDiv>
    </StyledPhonePage>
  );
}
