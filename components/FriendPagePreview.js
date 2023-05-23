import Image from "next/image";
import styled from "styled-components";
import { StyledButton } from "./Button/Button.Styled";
import { StyledList } from "./List/List.Styled";
import { useState } from "react";
import { hasContactOption } from "../lib/helpers";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWidth = styled.div`
  max-width: 375px;
  width: 375px;
`;

const StyledFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledNickname = styled.h2`
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  margin: 12px 0px 4px 0px;
`;

const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0px 0px 9px 0px;
`;

const StyledContactList = styled.ul`
  color: white;
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

const StyledInfoList = styled.div`
  background-color: white;
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 1rem;
  color: #2d2e83;
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

const StyledButtonContact = styled.button`
  background-color: white;
  border-style: none;
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 1rem;
  color: #2d2e83;
  text-align: left;
  font-size: 1rem;
`;

const StyledButtonContactList = styled.ul`
  list-style-type: none;
  justify-content: left;
  line-height: 190%;
  padding: 0rem 1rem 1rem 1rem;
`;

const StyledNotice = styled.div`
  background-color: white;
  border-style: none;
  margin: 1rem 1rem 1rem 1rem;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 1rem;
  color: #2d2e83;
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

const StyledHobbyList = styled.ul`
  list-style-type: none;
  justify-content: left;
  line-height: 190%;
  padding: 0rem 1rem 1rem 1rem;
`;

export default function FriendPagePreview({ friend }) {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <>
      <StyledDiv>
        <StyledWidth>
          <StyledFriend>
            <StyledNickname>{friend.nickname}</StyledNickname>
            <StyledName>
              {friend.first_name} {friend.last_name}
            </StyledName>
            <div>
              <Image
                src={friend.profileIconSource}
                alt={friend.nickname}
                width={180}
                height={180}
              />
            </div>

            <StyledContactList>
              {friend.contactOptions &&
                friend.contactOptions.map((options) =>
                  hasContactOption(options) ? (
                    <StyledList key={options.name}>
                      <StyledButton href={options.number}>
                        {options.name}
                      </StyledButton>
                    </StyledList>
                  ) : null
                )}
            </StyledContactList>

            <StyledInfoList>
              <p>
                Birthday: <b>{friend.birthday}</b>
              </p>
              <p>
                Status: <b>{friend.friendship_status}</b>
              </p>
              <p>
                City: <b>{friend.city}</b>
              </p>
              <p>Hobbies:</p>
              <StyledHobbyList>
                {friend.hobbies &&
                  friend.hobbies.map((hobbie, index) => (
                    <li key={index}>
                      <b>{hobbie}</b>
                    </li>
                  ))}
              </StyledHobbyList>
            </StyledInfoList>
            <StyledNotice>
              <p>Your Notice:</p>
            </StyledNotice>
            <StyledButtonContact onClick={handleClick}>
              <div>
                <p>Contact Options ↓</p>
              </div>
              {value && (
                <div>
                  <StyledButtonContactList>
                    {friend.contactOptions.map((options) =>
                      hasContactOption(options) ? (
                        <ul key={options.name}>
                          {" "}
                          <li href={options.number || options.address}>
                            {" "}
                            {options.name}:{" "}
                            <b> {options.number || options.address}</b>
                          </li>
                        </ul>
                      ) : null
                    )}
                  </StyledButtonContactList>
                </div>
              )}
            </StyledButtonContact>
          </StyledFriend>
        </StyledWidth>
      </StyledDiv>
    </>
  );
}
