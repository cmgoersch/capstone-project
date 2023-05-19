import styled from "styled-components";

function getFriendIndex(state) {
  return state.length;
}

const StyledfriendsCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: baseline;
  gap: 0.2rem;
  margin: 0rem 1rem 0rem 0rem;
  color: white;
`;

const StyledNumber = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const StyledCountertext = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export default function FriendsCounter({ state }) {
  const friendsLength = getFriendIndex(state);
  return (
    <StyledfriendsCounter>
      <StyledCountertext>you have </StyledCountertext>
      <StyledNumber>{friendsLength}</StyledNumber>
      <StyledCountertext> friends</StyledCountertext>
    </StyledfriendsCounter>
  );
}
