import { useState, useEffect, useRef } from "react";
import { StyledRandomButton } from "./Button/RandomButton.Styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.Styled";
import { StyledCleanLink } from "./Link/CleanLink.Styled";
import Image from "next/image";

function RandomFunction({ state }) {
  // TODO: Need to change the component to work with `state`
  const friendIdList = Object.keys(state);
  const friendList = state;

  const [friendId, setFriendId] = useState(null);
  const intervalId = useRef(null);
  const [intervalStopped, setIntervalStopped] = useState(false);

  useEffect(() => {
    if (intervalId.current === null && !intervalStopped) {
      intervalId.current = setInterval(() => {
        const index = Math.floor(Math.random() * friendIdList.length);
        setFriendId(friendIdList[index]);
      }, 300);
    }
    return () => clearInterval(intervalId);
  }, [friendIdList, intervalId, intervalStopped]);

  const handleRandomFriendClick = () => {
    clearInterval(intervalId.current);
    setIntervalStopped(true);
  };

  return (
    <div>
      {friendId !== null && (
        <StyledCleanLink
          href={`/contacts/${friendId}-${friendList[friendId].nickname}`}
        >
          <div>
            <Image
              src={friendList[friendId].profileIconSource}
              alt={friendList[friendId].nickname}
              width={95}
              height={95}
            />
          </div>
          {intervalStopped ? (
            <div>{friendList[friendId].nickname}</div>
          ) : (
            <div>Who is next?</div>
          )}
        </StyledCleanLink>
      )}
      {intervalStopped ? (
        <StyledCleanLink
          href={`/contacts/${friendId}-${friendList[friendId].nickname}`}
        >
          <StyledRandomButtonClicked>
            <div>
              <h1>Get in touch</h1>
              <p>Your winner is {friendList[friendId].nickname}! </p>
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
