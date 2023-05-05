import data from "@/data.json";
import FriendsPage from "@/components/FriendPages";

export default function HomePage() {
  return (
    <div>
      <h1>Better-Friend-App</h1>
      <p>Your circle of friends</p>
      <FriendsPage />
    </div>
  );
}
