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
  max-width: 375px;
  min-width: 0;
  margin: 0.5rem;
  padding: 0.3rem;
`;

const StyledFriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFriendTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem 0rem 1rem;
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

const StyledProfilePicture = styled.p`
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px;
`;

export default function BirthdayList({ state }) {
  const [friends, setFriends] = useState(Object.entries(state));
  const [visibleFriends, setVisibleFriends] = useState(6); // Anfangsanzahl der sichtbaren Freunde

  const showMoreFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends + 6); // Erhöhe die Anzahl der sichtbaren Freunde um 6
  };

  const showLessFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends - 6); // Verringere die Anzahl der sichtbaren Freunde um 6
  };

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledHomePage>
          <StyledIndex>
            <StyledTitleText>Birthdays</StyledTitleText>
            <StyledBirthdayBox>
              {friends.slice(0, visibleFriends).map(([id, friend]) => (
                <div key={id}>
                  <StyledSingleFriend>
                    <StyledCleanLink href={`contacts/${id}-${friend.nickname}`}>
                      <StyledFriendBox>
                        <StyledProfilePicture>
                          <Image
                            src={friend.profileIconSource}
                            alt={friend.nickname}
                            width={80}
                            height={80}
                          />
                        </StyledProfilePicture>
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
            <div>
              {visibleFriends < friends.length ? (
                <button onClick={showMoreFriends}>Mehr anzeigen</button>
              ) : (
                <button onClick={showLessFriends}>Weniger anzeigen</button>
              )}
            </div>
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
