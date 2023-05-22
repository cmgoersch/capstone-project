import FriendPages from "@/components/FriendPages";
import Header from "@/components/Header";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import { StyledLink } from "@/components/Link/Link.Styled";
import { useState } from "react";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledSerchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 1rem 2rem 1rem;
`;

const StyledSerchBarInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 17rem;
  border-style: none;
`;

export default function Contacts({ state }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredFriends, setFilteredFriends] = useState(Object.entries(state));

  const handleSearchInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    const friendArray = Object.entries(state);
    const filteredList = friendArray.filter(([id, friend]) => {
      const fullName = `${friend.first_name} ${friend.last_name}`.toLowerCase();
      const nickname = friend.nickname.toLowerCase();
      return fullName.includes(input) || nickname.includes(input);
    });
    setFilteredFriends(filteredList);
    setSearchInput(input);
  };

  return (
    <>
      <Header />
      <StyledTitleText>Your circle of friends</StyledTitleText>
      <StyledSerchBar>
        <StyledSerchBarInput
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search by Name or Nickname"
        />
      </StyledSerchBar>
      <FriendPages friends={filteredFriends} />
      <StyledFooter>
        <StyledLink href={`/`}>back</StyledLink>
        <StyledLink href={`/addContact`}>
          Add new <br />
          contact
        </StyledLink>
      </StyledFooter>
    </>
  );
}
