import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { StyledRandomButton } from "./Button/RandomButton.styled";
import { StyledRandomButtonClicked } from "./Button/RandomButtonClicked.styled";
import Image from "next/image";
import { StyledCleanLink } from "@/components/Link/CleanLink.Styled";

function RandomFunction({ data }) {
  const [friendIndex, setFriendIndex] = useState(null);
  const intervalId = useRef(null);
  const [intervalStopped, setIntervalStopped] = useState(false);

  useEffect(() => {
    if (intervalId.current === null && !intervalStopped) {
      intervalId.current = setInterval(() => {
        const index = Math.floor(Math.random() * data.length);
        setFriendIndex(index);
      }, 350);
    }
    return () => clearInterval(intervalId);
  }, [data, intervalId, intervalStopped]);

  const handleRandomFriendClick = () => {
    clearInterval(intervalId.current);
    setIntervalStopped(true);
    const link = `/contacts/${data[friendIndex].id}-${data[friendIndex].nickname}`;
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
              width={100}
              height={100}
            />
          </div>
          {intervalStopped === true ? (
            <div>{data[friendIndex].nickname} </div>
          ) : (
            <div>Who is next?</div>
          )}
        </StyledCleanLink>
      )}
      {intervalStopped === true ? (
        <StyledCleanLink
          href={`/contacts/${data[friendIndex].id}-${data[friendIndex].nickname}`}
        >
          <StyledRandomButtonClicked>
            <div>
              <h1>Get in touch!</h1>
              <a>Your winner is {data[friendIndex].nickname}! </a>
            </div>
          </StyledRandomButtonClicked>
        </StyledCleanLink>
      ) : (
        <StyledRandomButton onClick={handleRandomFriendClick}>
          <div>
            <h1> Be a friend! </h1>
            <a>Push the Button!</a>
          </div>
        </StyledRandomButton>
      )}
    </div>
  );
}

export default RandomFunction;
