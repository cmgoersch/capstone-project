import { useState, useEffect, useRef } from "react";
import { StyledRandomButton } from "./Button/RandomButton.Styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.Styled";
import { StyledCleanLink } from "./Link/CleanLink.styled";
import Image from "next/image";

function RandomFunction({ data }) {
  const [friendIndex, setFriendIndex] = useState(null);
  const intervalId = useRef(null);
  const [intervalStopped, setIntervalStopped] = useState(false);

  useEffect(() => {
    if (intervalId.current === null && !intervalStopped) {
      intervalId.current = setInterval(() => {
        const index = Math.floor(Math.random() * data.length);
        setFriendIndex(index);
      }, 300);
    }
    return () => clearInterval(intervalId);
  }, [data, intervalId, intervalStopped]);

  const handleRandomFriendClick = () => {
    clearInterval(intervalId.current);
    setIntervalStopped(true);
  };

  return (
    <div>
      {friendIndex !== null && (
        <StyledCleanLink
          href={`/contacts/${data[friendIndex].id}-${data[friendIndex].nickname}`}
        >
          <div>
            <Image
              src={data[friendIndex].profileIconSource}
              alt={data[friendIndex].nickname}
              width={95}
              height={95}
            />
          </div>
          {intervalStopped ? (
            <div>{data[friendIndex].nickname}</div>
          ) : (
            <div>Who is next?</div>
          )}
        </StyledCleanLink>
      )}
      {intervalStopped ? (
        <StyledCleanLink
          href={`/contacts/${data[friendIndex].id}-${data[friendIndex].nickname}`}
        >
          <StyledRandomButtonClicked>
            <div>
              <h1>Get in touch</h1>
              <p>Your winner is {data[friendIndex].nickname}! </p>
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
