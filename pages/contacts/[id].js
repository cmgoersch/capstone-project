import { useRouter } from "next/router";
import FriendsPagePreview from "@/components/FriendPagePreview";
import Link from "next/link";
import data from "@/data.json";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID:", id);

  if (!id) {
    return null;
  }
  const testID = id.split("-");
  const friend = data.find((element) => element.id === testID[0]);
  return (
    <>
      <FriendsPagePreview friend={friend} />
      <Link href={`/contacts`}>Back</Link>
    </>
  );
}
