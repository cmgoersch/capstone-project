import { useState } from "react";
import Link from "next/link";
import { StyledRandomButton } from "./Button/RandomButton.styled";
import Image from "next/image";

function RandomFunction({ data }) {
  const [friendIndex, setFriendIndex] = useState(null);

  function handleRandomFriendClick() {
    const randomIndex = Math.floor(Math.random() * data.length);
    setFriendIndex(randomIndex);
  }

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
