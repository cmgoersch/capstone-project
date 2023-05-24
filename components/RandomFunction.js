import { useState, useEffect, useRef } from "react";
import { StyledRandomButton } from "./Button/RandomButton.Styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.Styled";
import { StyledCleanLink } from "./Link/CleanLink.Styled";
import Image from "next/image";
import styled from "styled-components";

const StyledTitelText = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`;

const StyledSubTitleText = styled.p`
  margin: 0.5rem 0 0 0;
`;

function RandomFunction({ friendList }) {
  const friendIds = Object.keys(friendList);
  const [friendId, setFriendId] = useState(friendIds[0]);
  const [intervalStopped, setIntervalStopped] = useState(false);

  useEffect(() => {
    if (intervalStopped) {
      return;
    }
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * friendIds.length);
      setFriendId(friendIds[index]);
    }, 300);

    return () => clearInterval(intervalId);
  }, [friendIds, friendList, intervalStopped]);

  const handleRandomFriendClick = () => {
    setIntervalStopped(true);
  };
  const currentFriend = friendList[friendId];
  if (!currentFriend) {
    return null;
  }
  return (
    <div>
      {friendId !== null && (
        <StyledCleanLink
          href={`/contacts/${friendId}-${currentFriend.nickname}`}
        >
          <div>
            <Image
              src={currentFriend.profileIconSource}
              alt={currentFriend.nickname}
              width={95}
              height={95}
            />
          </div>
          {intervalStopped ? (
            <div>{currentFriend.nickname}</div>
          ) : (
            <div>Who is next?</div>
          )}
        </StyledCleanLink>
      )}
      {intervalStopped ? (
        <StyledCleanLink
          href={`/contacts/${friendId}-${currentFriend.nickname}?winning=true`}
        >
          <StyledRandomButtonClicked>
            <div>
              <StyledTitelText>Get in touch</StyledTitelText>
              <StyledSubTitleText>
                Your winner is {currentFriend.nickname}!{" "}
              </StyledSubTitleText>
            </div>
          </StyledRandomButtonClicked>
        </StyledCleanLink>
      ) : (
        <StyledRandomButton onClick={handleRandomFriendClick}>
          <div>
            <StyledTitelText>Be a friend!</StyledTitelText>
            <StyledSubTitleText>Push the Button</StyledSubTitleText>
          </div>
        </StyledRandomButton>
      )}
    </div>
  );
}

export default RandomFunction;
