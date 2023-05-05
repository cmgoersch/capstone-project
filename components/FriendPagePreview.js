import React from "react";
// import data from "@/data.json";
import Image from "next/image";

export default function FriendPagePreview({ friend }) {
  console.log("friend:", friend);
  return (
    <div>
      <h2>{friend.nickname}</h2>
      <div>
        <Image
          src={friend.profileIconSource}
          alt={friend.nickname}
          width={250}
          height={250}
        />
      </div>
      <p>
        {friend.first_name} {friend.last_name}
      </p>
      <p>Contact:</p>
      <ul>
        {Object.entries(friend.contactOptions).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>birthday: {friend.birthday}</p>
      <p>city: {friend.city}</p>
      <p>hobbies:</p>
      <ul>
        {friend.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
