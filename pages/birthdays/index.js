import styled from "styled-components";
import Image from "next/image";
import Header from "@/components/Header";
import React, { useState } from "react";
import { StyledButton } from "@/components/Button/Button.Styled";
import { StyledButtonBlack } from "@/components/Button/ButtonBlack.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import { StyledCleanLink } from "@/components/Link/CleanLink.Styled";
import { StyledLinkBlack } from "@/components/Link/BlackLink.Styled";
import { StyledAddContactLink } from "@/components/Link/AddContactLink.Styled";
import { StyledBirthdayLink } from "@/components/Link/BirthdayLink.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBirthdayList = styled.article`
  max-width: 375px;
`;

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledIndex = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledBirthdayBox = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0rem;
`;

const StyledSingleFriend = styled.section`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  width: 20rem;
  min-width: 0;
  margin: 0.5rem;
  padding: 1rem;
`;

const StyledFriend = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledFriendTextBox = styled.article`
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

const StyledBirthday = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px 05px 0px 5px;
`;

const StyledBirthdayAge = styled.p`
  display: flex;
  flex-direction: raw;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px 05px 0px 5px;
`;

const StyledButtonWrapper = styled.article`
  display: flex;
  justify-content: right;

  padding: 1rem 0rem 1rem 0rem;
`;

const StyledProfilePicture = styled.section`
  margin: 5px;
`;

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default function BirthdayList({ state }) {
  const calculateAge = (birthday) => {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  };

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
        age: calculateAge(new Date(friend.birthday)),
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
                .map(({ id, friend, daysUntilBirthday, age }) => {
                  const birthdayDate = new Date(friend.birthday);
                  const formattedBirthday = formatDate(birthdayDate);
                  return (
                    <div key={id}>
                      <StyledSingleFriend>
                        <StyledCleanLink
                          href={`contacts/${id}-${friend.nickname}`}
                        >
                          <StyledFriend>
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
                                <span>
                                  The next birthday is
                                  <br /> in
                                  <b>{daysUntilBirthday}</b> days!
                                </span>
                              </StyledBirthday>
                              <StyledBirthdayAge>
                                {friend.nickname} turns <b>{age + 1}</b>🎈
                              </StyledBirthdayAge>
                            </StyledFriendTextBox>
                          </StyledFriend>
                        </StyledCleanLink>
                      </StyledSingleFriend>
                    </div>
                  );
                })}
            </StyledBirthdayBox>
            <div>
              {visibleFriends < friends.length ? (
                <StyledButtonWrapper>
                  {visibleFriends > 4 && (
                    <StyledButtonBlack onClick={showLessFriends}>
                      Show
                      <br />
                      less
                    </StyledButtonBlack>
                  )}
                  <StyledButton onClick={showMoreFriends}>
                    Show
                    <br />
                    more
                  </StyledButton>
                </StyledButtonWrapper>
              ) : (
                <StyledButtonWrapper>
                  <StyledButtonBlack onClick={showLessFriends}>
                    Show
                    <br />
                    less
                  </StyledButtonBlack>
                </StyledButtonWrapper>
              )}
            </div>
          </StyledBirthdayList>
        </StyledIndex>
        <StyledFooter>
          <StyledLinkBlack href={`/`}>Back</StyledLinkBlack>
          <StyledAddContactLink href={`/addContact`}>
            Add new <br />
            contact
          </StyledAddContactLink>
          <StyledBirthdayLink href={`/contacts`}>
            All friends
          </StyledBirthdayLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
