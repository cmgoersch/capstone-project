import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import React, { useState } from "react";
import { StyledButton } from "@/components/Button/Button.Styled";
import { StyledButtonBlack } from "@/components/Button/ButtonBlack.Styled";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { StyledCleanLink } from "@/components/Link/CleanLink.Styled";
import { StyledLinkBlack } from "@/components/Link/LinkBlack.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBirthdayList = styled.div`
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
  padding: 0rem;
`;

const StyledSingleFriend = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  width: 20rem;
  min-width: 0;
  margin: 0.5rem;
  padding: 0rem;
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
  margin: 5px 05px 0px 5px;
`;

const StyledProfilePicture = styled.p`
  margin: 5px;
`;

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default function BirthdayList({ state }) {
  const calculateDaysUntilBirthday = (birthday) => {
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const diffTime = Math.abs(nextBirthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const [friends, setFriends] = useState(
    Object.entries(state)
      .filter(([id, friend]) => friend.birthday)
      .map(([id, friend]) => ({
        id,
        friend,
        daysUntilBirthday: calculateDaysUntilBirthday(
          new Date(friend.birthday)
        ),
      }))
      .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday)
  );

  const [visibleFriends, setVisibleFriends] = useState(4);

  const showMoreFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends + 4);
  };

  const showLessFriends = () => {
    setVisibleFriends((prevVisibleFriends) => prevVisibleFriends - 4);
  };

  return (
    <>
      <Header />
      <StyledDiv>
        <StyledIndex>
          <StyledBirthdayList>
            <StyledTitleText>Upcoming birthdays</StyledTitleText>

            <StyledBirthdayBox>
              {friends
                .slice(0, visibleFriends)
                .map(({ id, friend, daysUntilBirthday }) => {
                  const birthdayDate = new Date(friend.birthday);
                  const formattedBirthday = formatDate(birthdayDate);
                  return (
                    <div key={id}>
                      <StyledSingleFriend>
                        <StyledCleanLink
                          href={`contacts/${id}-${friend.nickname}`}
                        >
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
                              <StyledNickname>{friend.nickname}</StyledNickname>
                              <StyledBirthday>
                                {formattedBirthday}
                              </StyledBirthday>
                              <StyledBirthday>
                                {friend.nickname}`s next birthday <br />
                                is in <b>{daysUntilBirthday}</b> days!
                              </StyledBirthday>
                            </StyledFriendTextBox>
                          </StyledFriendBox>
                        </StyledCleanLink>
                      </StyledSingleFriend>
                    </div>
                  );
                })}
            </StyledBirthdayBox>
            <div>
              {visibleFriends < friends.length ? (
                <div>
                  <StyledButton onClick={showMoreFriends}>
                    Show
                    <br />
                    more
                  </StyledButton>
                </div>
              ) : (
                <div>
                  <StyledButtonBlack onClick={showLessFriends}>
                    Show
                    <br />
                    less
                  </StyledButtonBlack>
                </div>
              )}
            </div>
          </StyledBirthdayList>
        </StyledIndex>
        <StyledFooter>
          <StyledLinkBlack href={`/`}>Back</StyledLinkBlack>
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
