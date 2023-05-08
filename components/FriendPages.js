import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledFriendBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  text-align: center;
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
                width={100}
                height={100}
              />
            </div>
            <h2>{friend.nickname}</h2>
            <p>
              {friend.first_name} {friend.last_name}
            </p>
          </Link>
        </div>
      ))}
    </StyledFriendBox>
  );
}
