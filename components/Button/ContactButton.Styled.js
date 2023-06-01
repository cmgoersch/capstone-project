import styled, { css } from "styled-components";

export const StyledContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 0.2rem solid green;
  background: rgb(0, 150, 64);
  background: linear-gradient(
    273deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
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
      background: #61c257;
      background: radial-gradient(
        circle at 30% 107%,
        #89db76 0%,
        #89db76 5%,
        #61c257 45%,
        #3e8e3b 60%,
        #255721 90%
      );
      border: 0.2rem solid #4e9e41;
    `}

  ${({ isMail }) =>
    isMail &&
    css`
      background: #fcd037;
      background: radial-gradient(
        circle at 30% 107%,
        #ffdd6e 0%,
        #ffdd6e 5%,
        #fcd037 45%,
        #a87a22 60%,
        #63470c 90%
      );
      border: 0.2rem solid #b88b2b;
    `}

 ${({ isMobile }) =>
    isMobile &&
    css`
      background: #9bcc51;
      background: radial-gradient(
        circle at 30% 107%,
        #c3e180 0%,
        #c3e180 5%,
        #9bcc51 45%,
        #72a52a 60%,
        #4b7c16 90%
      );
      border: 0.2rem solid #769f3f;
    `} 

${({ isLinkedIn }) =>
    isLinkedIn &&
    css`
      background: #0e76a8;
      background: radial-gradient(
        circle at 30% 107%,
        #3d99c3 0%,
        #3d99c3 5%,
        #0e76a8 45%,
        #095b84 60%,
        #033d5c 90%
      );
      border: 0.2rem solid #0b597f;
    `}

${({ isTwitter }) =>
    isTwitter &&
    css`
      background: #1da1f2;
      background: radial-gradient(
        circle at 30% 107%,
        #55c1f7 0%,
        #55c1f7 5%,
        #1da1f2 45%,
        #136d97 60%,
        #0a4461 90%
      );
      border: 0.2rem solid #0b597f;
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
      border: 0.2rem solid #285aeb;
    `}

${({ isTelegram }) =>
    isTelegram &&
    css`
      background: #26a5e4;
      background: radial-gradient(
        circle at 30% 107%,
        #5ac8f9 0%,
        #5ac8f9 5%,
        #26a5e4 45%,
        #1d7bac 60%,
        #134d73 90%
      );
      border: 0.2rem solid #0b597f;
    `}

${({ isSiganl }) =>
    isSiganl &&
    css`
      background: #1798c1;
      background: radial-gradient(
        circle at 30% 107%,
        #49b2d3 0%,
        #49b2d3 5%,
        #1798c1 45%,
        #116880 60%,
        #0a424e 90%
      );
      border: 0.2rem solid #0b597f;
    `}
`;
