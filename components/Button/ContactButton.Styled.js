import styled, { css } from "styled-components";

export const StyledContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 0.2rem solid green;
  background: linear-gradient(
    270deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(47, 172, 102, 1) 29%,
    rgba(0, 102, 51, 1) 58%
  );
  font-size: 0.7rem;
  //aspect-ratio: 1;
  border-radius: 8rem;
  position: absolute;
  width: 4.2rem;
  height: 4.2rem;

  transform: rotate(${(props) => props.rotate + 190}deg) translate(140px)
    rotate(-${(props) => props.rotate + 190}deg);
  &:hover {
    cursor: pointer;
  }

  ${({ isLandline }) =>
    isLandline &&
    css`
      background: #62b036;
      border: 0.2rem solid #657786;
    `}

  ${({ isMail }) =>
    isMail &&
    css`
      background: rgb(25, 100, 247);
      background: linear-gradient(
        273deg,
        rgba(25, 100, 247, 1) 39%,
        rgba(15, 88, 255, 1) 62%
      );

      border: 0.2rem solid #657786;
    `}

 ${({ isMobile }) =>
    isMobile &&
    css`
      background: #62b036;
      border: 0.2rem solid #657786;
    `} 

${({ isLinkedIn }) =>
    isLinkedIn &&
    css`
      background: #0a66c2;
      border: 0.2rem solid #657786;
    `}

${({ isTwitter }) =>
    isTwitter &&
    css`
      background: #1da1f2;
      border: 0.2rem solid #657786;
    `}

${({ isInstagram }) =>
    isInstagram &&
    css`
      background: #d6249f;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      border: 0.2rem solid #657786;
    `}

${({ isTelegram }) =>
    isTelegram &&
    css`
      background: #229ed9;
      border: 0.2rem solid #657786;
    `}

${({ isSiganl }) =>
    isSiganl &&
    css`
      background: rgb(25, 100, 247);
      background: linear-gradient(
        273deg,
        rgba(25, 100, 247, 1) 39%,
        rgba(15, 88, 255, 1) 62%
      );
      border: 0.2rem solid #657786;
    `}
`;
