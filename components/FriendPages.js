import React from "react";
import FriendsPagePreview from "./FriendsPagePreview";
import data from "@/data.json";
import Image from "next/image";

export default function FriendsPage() {
  return (
    <div>
      {data.map((friend) => (
        <div key={friend.id}>
          <div>
            <Image
              src={friend.profileIconSource}
              alt={friend.nickname}
              width={100}
              height={100}
            />
          </div>
          <h2>{friend.nickname}</h2>

          <p>
            {friend.first_name} {friend.last_name}
          </p>
        </div>
      ))}
    </div>
  );
}

{
  /* <p>birthday: {friend.birthday}</p>
          <p>hobbies:</p>
          <ul>
            {friend.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <p>city: {friend.city}</p>
          <p>Contact:</p>
          <ul>
            {Object.entries(friend.contactOptions).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul> */
}
