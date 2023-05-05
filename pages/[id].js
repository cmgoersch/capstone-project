import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import FriendPages from "@/components/FriendPages";
import Link from "next/link";
import data from "@/data.json";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID:", id);
  const friend = data.find((element) => element.id === id);

  return (
    <>
      <FriendsPagePreview friend={friend} />
      <Link href={`/contacts`}>Back</Link>
    </>
  );
}
