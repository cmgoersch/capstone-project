import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { StyledRandomButton } from "./Button/RandomButton.styled";
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
        <Link
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
          <div>{data[friendIndex].nickname}</div>
        </Link>
      )}
      <StyledRandomButton onClick={handleRandomFriendClick}>
        <div>
          <h1>Be a friend</h1>
          <a>Push the Button!</a>
        </div>
      </StyledRandomButton>
    </div>
  );
}

export default RandomFunction;
