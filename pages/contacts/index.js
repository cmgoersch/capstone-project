import FriendPages from "@/components/FriendPages";
import Header from "@/components/Header";
import FriendPagePreview from "@/components/FriendPagePreview";
import Link from "next/link";
import styled from "styled-components";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
`;

export default function Contacts() {
  return (
    <>
      <Header />
      <StyledTitleText>Your circle of friends</StyledTitleText>
      <FriendPages />

      <Link href={`/`}>back</Link>
    </>
  );
}
