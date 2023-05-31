import Image from "next/image";
import styled from "styled-components";
import { StyledContactButton } from "./Button/ContactButton.Styled";
import { useState } from "react";
import { hasContactOption } from "../lib/helpers";
import { useRouter } from "next/router";

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

const StyledContactList = styled.li`
  text-align: left;
  text-decoration: none;
  font-size: 1rem;
`;

const StyledInfoList = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 3rem 1rem 0rem 1rem;
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

const StyledSpexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 0rem 1rem;
`;

const StyledSpexTextTitle = styled.div`
  padding: 0rem 0rem 0.5rem 0rem;
  text-align: left;
`;

const StyledSpexText = styled.div`
  padding: 0rem 0rem 2rem 0rem;
  text-align: left;
`;

const StyledSpexListItems = styled.li`
  display: flex;
`;

const StyledHobbyList = styled.ul`
  list-style-type: none;
  justify-content: left;
  line-height: 130%;
  padding: 0rem 1rem 1rem 0rem;
  margin: 0;
`;

const StyledButtonContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default function FriendPagePreview({ friend, friendId }) {
  const birthday = new Date(friend.birthday);
  const day = String(birthday.getDate()).padStart(2, "0");
  const month = String(birthday.getMonth() + 1).padStart(2, "0");
  const year = birthday.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  const [value, setValue] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setValue(!value);
  };

  const openContactLink = (contactOptions) => {
    console.log("Hier sollte ContactLink stehen", contactOptions);
    let url;
    switch (contactOptions.type) {
      case "mobile":
        url = `tel:${contactOptions.number}`;
        break;

      case "landline":
        url = `tel:${contactOptions.number}`;
        break;

      case "signal":
        url = `tel:${contactOptions.number}`;
        break;

      case "telegram":
        url = `tel:${contactOptions.number}`;
        break;

      case "twitter":
        url = `https://twitter.com/home`;
        break;

      case "linkedIn":
        url = `https://www.linkedin.com/`;
        break;

      case "mail":
        url = `mailto:${contactOptions.address}`;
        break;

      case "instagram":
        url = `https://www.instagram.com/`;
        break;
    }
    if (url) {
      window.open(url, "_blank");
    }
    router.push({
      pathname: `/contactQuery/${friendId}`,
    });
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

            <StyledButtonContainer>
              <Image
                src={friend.profileIconSource}
                alt={friend.nickname}
                width={180}
                height={180}
              />
              {friend.contactOptions &&
                friend.contactOptions
                  .filter((opts) => hasContactOption(opts))
                  .map((options, index) => (
                    <StyledContactButton
                      onClick={() => openContactLink(options)}
                      key={options.name}
                      isLandline={options.type === "landline"}
                      isMail={options.type === "mail"}
                      isMobile={options.type === "mobile"}
                      isLinkedIn={options.type === "linkedIn"}
                      isTwitter={options.type === "twitter"}
                      isInstagram={options.type === "instagram"}
                      isTelegram={options.type === "telegram"}
                      isSiganl={options.type === "signal"}
                      rotate={
                        friend.contactOptions.length === 1
                          ? 0
                          : (index + 5) *
                            (200 /
                              Math.max(1, friend.contactOptions.length - 1.2))
                      }
                    >
                      {options.name}
                    </StyledContactButton>
                  ))}
            </StyledButtonContainer>

            <StyledInfoList>
              <StyledSpexBox>
                <StyledSpexTextTitle>Birthday:</StyledSpexTextTitle>
                <StyledSpexText>
                  <b>{formattedDate}</b>
                </StyledSpexText>
                <StyledSpexTextTitle>Status:</StyledSpexTextTitle>
                <StyledSpexText>
                  <b>{friend.friendship_status}</b>
                </StyledSpexText>
              </StyledSpexBox>
              <StyledSpexBox>
                <StyledSpexTextTitle>City:</StyledSpexTextTitle>
                <StyledSpexText>
                  <b>{friend.city}</b>
                </StyledSpexText>
                <StyledSpexTextTitle>Hobbies:</StyledSpexTextTitle>
                <StyledHobbyList>
                  {friend.hobbies &&
                    friend.hobbies.map((hobbie, index) => (
                      <StyledSpexListItems key={index}>
                        <b>{hobbie}</b>
                      </StyledSpexListItems>
                    ))}
                </StyledHobbyList>
              </StyledSpexBox>
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
                        <StyledContactList key={options.name}>
                          {" "}
                          <li href={options.number || options.address}>
                            {" "}
                            {options.name}:{" "}
                            <b> {options.number || options.address}</b>
                          </li>
                        </StyledContactList>
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
