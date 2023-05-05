import data from "@/data.json";
import FriendsPage from "@/components/FriendPages";
import FriendsPagPreview from "@/components/FriendPagePreview";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Better-Friend-App</h1>

      <Link href={`/contacts`}> Contacts</Link>
    </div>
  );
}
