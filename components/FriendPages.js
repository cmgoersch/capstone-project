import Image from "next/image";
import styled from "styled-components";
import { StyledCleanLink } from "./Link/CleanLink.Styled";
import { StyledButton } from "./Button/Button.Styled";

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

const StyledCounter = styled.p`
  color: white;
  text-decoration: none;
  font-size: 0.5rem;
  margin: 1px;
`;

const StyledNoMachingFriend = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  margin: 6px 0px 6px 0px;
`;

const StyledNoMachingFriendInfo = styled.p`
  color: white;
  font-size: 1rem;
`;

export default function FriendPages({
  friends,
  searchFound,
  onSearchAgainClick,
}) {
  const daysSinceLastContact = (contact_history) => {
    if (!contact_history || contact_history.length === 0) {
      return "New Friend";
    }

    const lastContactEntry = contact_history
      ? contact_history.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })[0]
      : undefined;

    let result = "No contact history";
    if (lastContactEntry) {
      const lastContact = lastContactEntry.date;
      const today = new Date();
      const differenceInMilliseconds = today - new Date(lastContact);
      const differenceInDays = Math.round(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      result = `${differenceInDays} days`;
    }

    return result;
  };
  return (
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
                  <StyledCounter>Last Contact:</StyledCounter>
                  <StyledCounter>
                    {daysSinceLastContact(friend.contact_history)}
                  </StyledCounter>
                </StyledCleanLink>
              </div>
            ))
          ) : (
            <>
              <StyledButton onClick={onSearchAgainClick}>
                Search <br />
                Again
              </StyledButton>
              <StyledNoMachingFriend>
                <StyledNoMachingFriendInfo>
                  No matching friend found 😓
                </StyledNoMachingFriendInfo>
                <br />
                Maybe you want to create <br />a new friend contact?
                <StyledNoMachingFriendInfo>
                  Please use the{" "}
                  <em>
                    Add new <br /> contact
                  </em>{" "}
                  button below :)
                </StyledNoMachingFriendInfo>
              </StyledNoMachingFriend>
            </>
          )}
        </StyledFriendBox>
      </StyledWidth>
    </StyledDiv>
  );
}
