import { useState, useEffect, useRef } from "react";
import { StyledRandomButton } from "./Button/RandomButton.Styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.Styled";
import { StyledCleanLink } from "./Link/CleanLink.Styled";
import Image from "next/image";

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
              <h1>Get in touch</h1>
              <p>Your winner is {currentFriend.nickname}! </p>
            </div>
          </StyledRandomButtonClicked>
        </StyledCleanLink>
      ) : (
        <StyledRandomButton onClick={handleRandomFriendClick}>
          <div>
            <h1> Be a friend! </h1>
            <p>Push the button!</p>
          </div>
        </StyledRandomButton>
      )}
    </div>
  );
}

export default RandomFunction;
