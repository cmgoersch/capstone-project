import Image from "next/image";
import styled from "styled-components";
import { StyledCleanLink } from "./Link/CleanLink.Styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWidth = styled.div`
  max-width: 375px;
`;

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
export default function FriendPages({ friends }) {
  return (
    <>
      <StyledDiv>
        <StyledWidth>
          <StyledFriendBox>
            {friends.length > 0 ? (
              friends.map(([id, friend]) => (
                <div key={id}>
                  <StyledCleanLink href={`contacts/${id}-${friend.nickname}`}>
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
                  </StyledCleanLink>
                </div>
              ))
            ) : (
              <div>No matching friends found.</div>
            )}
          </StyledFriendBox>
        </StyledWidth>
      </StyledDiv>
    </>
  );
}
