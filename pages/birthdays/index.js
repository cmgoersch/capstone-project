import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledCleanLink } from "@/components/Link/CleanLink.Styled";
import Image from "next/image";

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

const StyledBirthdayBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSingleFriend = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  justify-content: center;

  width: 375px;
  margin: 0.5rem;
`;

const StyledFriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFriendTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledNickname = styled.h2`
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
  margin: 0px;
`;

const StyledName = styled.p`
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px;
`;

const StyledBirthday = styled.p`
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px;
`;

export default function BirthdayList({ state }) {
  const [friends] = useState(Object.entries(state));

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledHomePage>
          <StyledIndex>
            <StyledTitleText>Birthdays</StyledTitleText>
            <StyledBirthdayBox>
              {friends.map(([id, friend]) => (
                <div key={id}>
                  <StyledSingleFriend>
                    {" "}
                    <StyledCleanLink href={`contacts/${id}-${friend.nickname}`}>
                      <StyledFriendBox>
                        <Image
                          src={friend.profileIconSource}
                          alt={friend.nickname}
                          width={80}
                          height={80}
                        />
                        <StyledFriendTextBox>
                          <StyledBirthday>{friend.birthday}</StyledBirthday>

                          <StyledNickname>{friend.nickname}</StyledNickname>
                          {/* <StyledName>
                            {friend.first_name} {friend.last_name}
                          </StyledName> */}
                        </StyledFriendTextBox>
                      </StyledFriendBox>
                    </StyledCleanLink>
                  </StyledSingleFriend>
                </div>
              ))}
            </StyledBirthdayBox>
          </StyledIndex>
        </StyledHomePage>
        <StyledFooter>
          <StyledLink href={`/`}>Back</StyledLink>
          <StyledLink href={`/contacts`}>All friends</StyledLink>
          <StyledLink href={`/addContact`}>
            Add new <br />
            contact
          </StyledLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
