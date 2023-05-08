import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledFriendBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledNickname = styled.h2`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 2px;
`;

const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 0.6rem;
  margin: 6px;
`;

export default function FriendPages() {
  return (
    <StyledFriendBox>
      {data.map((friend) => (
        <div key={friend.id}>
          <Link href={`contacts/${friend.id}-${friend.nickname}`}>
            <div>
              <Image
                src={friend.profileIconSource}
                alt={friend.nickname}
                width={80}
                height={80}
              />
            </div>
            <StyledNickname>{friend.nickname}</StyledNickname>
            <StyledName>
              {friend.first_name} {friend.last_name}
            </StyledName>
          </Link>
        </div>
      ))}
    </StyledFriendBox>
  );
}
