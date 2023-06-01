import { useState, useEffect, useRef } from "react";
import { StyledRandomButton } from "./Button/RandomButton.Styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.Styled";
import { StyledCleanLink } from "./Link/CleanLink.Styled";
import Image from "next/image";
import styled from "styled-components";
import { StyledReasonsLink } from "./Link/ReasonsLink";
import { StyledTitleFriendLink } from "./Link/TitleFriendLink.Styled";

const StyledTitelText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  width: 100%;
  text-align: center;
`;

const StyledSubTitleText = styled.p`
  margin: 0.5rem 0 0 0;
`;

const StyledPositionRelative = styled.div`
  position: relative;
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
          <div style={{ position: "relative", width: "100%" }}>
            <StyledRandomButtonClicked>
              <StyledTitelText>Get in touch</StyledTitelText>
              <StyledSubTitleText>
                Your winner is {currentFriend.nickname}!{" "}
              </StyledSubTitleText>
            </StyledRandomButtonClicked>
            <StyledPositionRelative>
              <StyledReasonsLink href={`/reasons`} isstatic={"static"}>
                10 reasons <br /> to get in <br /> touch
              </StyledReasonsLink>
              <StyledTitleFriendLink href={`/addContact`}>
                Add new <br /> friend
              </StyledTitleFriendLink>
            </StyledPositionRelative>
          </div>
        </StyledCleanLink>
      ) : (
        <div style={{ position: "relative", width: "100%" }}>
          <StyledRandomButton onClick={handleRandomFriendClick}>
            <StyledTitelText>Be a friend!</StyledTitelText>
            <StyledSubTitleText>Push the Button</StyledSubTitleText>
          </StyledRandomButton>
          <StyledPositionRelative>
            <StyledReasonsLink href={`/reasons`} isstatic={"static"}>
              10 reasons <br /> to get in <br /> touch
            </StyledReasonsLink>
            <StyledTitleFriendLink href={`/addContact`}>
              Add new <br /> friend
            </StyledTitleFriendLink>
          </StyledPositionRelative>
        </div>
      )}
    </div>
  );
}

export default RandomFunction;
