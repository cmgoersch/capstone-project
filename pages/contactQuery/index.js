import Header from "@/components/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { StyledButton } from "@/components/Button/Button.Styled";
import { StyledContactButton } from "@/components/Button/ContactButton.Styled";
import { StyledQueryButton } from "@/components/Button/ButtonQuery.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 0.8rem;
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
  margin: 12px 0px 4px 0px;
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

export default function ContactQuery() {
  const router = useRouter();
  const { friend } = router.query;

  const friendObj = friend ? JSON.parse(friend) : null;

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledWidth>
          <StyledFriend>
            <StyledNickname>
              {friendObj ? friendObj.nickname : ""}
            </StyledNickname>
            <StyledName>
              {friendObj
                ? `${friendObj.first_name} ${friendObj.last_name}`
                : ""}
            </StyledName>
            <StyledButtonContainer>
              <Image
                src={friendObj ? friendObj.profileIconSource : ""}
                alt={friendObj ? friendObj.nickname : ""}
                width={140}
                height={140}
              />
            </StyledButtonContainer>
            <StyledTitleText>
              Have you reached your friend {friendObj ? friendObj.nickname : ""}
              ?
            </StyledTitleText>
            <StyledFooter>
              <StyledQueryButton> Jes </StyledQueryButton>
              <StyledQueryButton> No </StyledQueryButton>
              <StyledQueryButton>
                try <br /> again
              </StyledQueryButton>
            </StyledFooter>
          </StyledFriend>
        </StyledWidth>
      </StyledDiv>
    </>
  );
}
