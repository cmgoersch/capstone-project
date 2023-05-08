import FriendPages from "@/components/FriendPages";
import FriendPagePreview from "@/components/FriendPagePreview";
import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <h1>Your circle of friends</h1>
      <FriendPages />

      <Link href={`/`}>back</Link>
    </>
  );
}
