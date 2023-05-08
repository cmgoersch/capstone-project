import data from "@/data.json";
import FriendsPage from "@/components/FriendPages";
import FriendsPagPreview from "@/components/FriendPagePreview";
import Header from "@/components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Link href={`/contacts`}> Contacts</Link>
    </div>
  );
}
