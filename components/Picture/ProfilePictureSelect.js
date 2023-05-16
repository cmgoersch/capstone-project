import styled from "styled-components";
import { StyledButton } from "../Button/Button.Styled";

import Image from "next/image";

import m1 from "../../public/monster/m1.png";
import m2 from "../../public/monster/m2.png";
import m3 from "../../public/monster/m3.png";
import m4 from "../../public/monster/m4.png";
import m5 from "../../public/monster/m5.png";
import m6 from "../../public/monster/m6.png";
import m7 from "../../public/monster/m7.png";
import m8 from "../../public/monster/m8.png";
import m9 from "../../public/monster/m9.png";
import m10 from "../../public/monster/m10.png";
import m11 from "../../public/monster/m11.png";
import m12 from "../../public/monster/m12.png";
import m13 from "../../public/monster/m13.png";
import m14 from "../../public/monster/m14.png";
import m15 from "../../public/monster/m15.png";
import m16 from "../../public/monster/m16.png";
import m17 from "../../public/monster/m17.png";
import m18 from "../../public/monster/m18.png";
import m19 from "../../public/monster/m19.png";
import m20 from "../../public/monster/m20.png";
import m21 from "../../public/monster/m21.png";
import m22 from "../../public/monster/m22.png";
import m23 from "../../public/monster/m23.png";
import m24 from "../../public/monster/m24.png";
import m25 from "../../public/monster/m25.png";
import m26 from "../../public/monster/m26.png";
import m27 from "../../public/monster/m27.png";

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const ProfilePictureSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButtonStyled = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const ProfilePictureSelect = ({ selectedPicture, handlePictureSelect }) => {
  const profilePictures = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
    m11,
    m12,
    m13,
    m14,
    m15,
    m16,
    m17,
    m18,
    m19,
    m20,
    m21,
    m22,
    m23,
    m24,
    m25,
    m26,
    m27,
  ];

  return (
    <profilePictureSelect>
      {selectedPicture ? (
        <ProfilePictureSelectContainer>
          <h4>Chosen profile picture:</h4>
          <Image
            src={selectedPicture}
            alt="Your profile picture"
            width={200}
            height={200}
          />
          <StyledButton name="profileIconSource" onClick={handlePictureSelect}>
            Change <br /> Icon
          </StyledButton>
        </ProfilePictureSelectContainer>
      ) : (
        <>
          <h3>Set profile picture:</h3>
          <ProfilePictureContainer>
            {profilePictures.map((picture) => (
              <IconButtonStyled
                key={picture.src}
                type="button"
                name="profileIconSource"
                onClick={(e) => handlePictureSelect(e, picture.src)}
              >
                <Image
                  src={picture}
                  alt="Profile picture"
                  width={40}
                  height={40}
                />
              </IconButtonStyled>
            ))}
          </ProfilePictureContainer>
        </>
      )}
    </profilePictureSelect>
  );
};

export default ProfilePictureSelect;
