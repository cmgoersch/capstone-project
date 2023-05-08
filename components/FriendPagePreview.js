import React from "react";
import Image from "next/image";
import styled from "styled-components";

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
  margin: 2px;
`;

const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 6px;
`;

const StyledContactList = styled.ul`
  color: white;
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

const StyledInfoList = styled.div`
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  color: blue;
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

export default function FriendPagePreview({ friend }) {
  console.log("friend:", friend);
  return (
    <StyledFriend>
      <StyledNickname>{friend.nickname}</StyledNickname>
      <StyledName>
        {friend.first_name} {friend.last_name}
      </StyledName>
      <div>
        <Image
          src={friend.profileIconSource}
          alt={friend.nickname}
          width={180}
          height={180}
        />
      </div>

      {/* <p>Contact:</p> */}
      <StyledContactList>
        {Object.entries(friend.contactOptions).map(([key, value]) => (
          <li key={key}>
            {key}: <a href={value}>{value}</a>
          </li>
        ))}
      </StyledContactList>
      <StyledInfoList>
        <p>birthday: {friend.birthday}</p>
        <p>city: {friend.city}</p>
        <p>hobbies:</p>
        <ul>
          {friend.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </StyledInfoList>
    </StyledFriend>
  );
}
