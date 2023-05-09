import data from "@/data.json";
import RandomFunction from "@/components/RandomFunction";
import FriendsPage from "@/components/FriendPages";
import FriendsPagPreview from "@/components/FriendPagePreview";
import Header from "@/components/Header";
import Link from "next/link";
import { StyledLink } from "@/components/Link/Link.Styled";

export default function HomePage() {
  return (
    <div>
      <Header />
      <RandomFunction data={data} />
      <StyledLink href={`/contacts`}> Contacts</StyledLink>
    </div>
  );
}
