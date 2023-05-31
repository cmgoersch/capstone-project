import useLocalStorageState from "use-local-storage-state";
import defaultData from "@/data.json";
import GlobalStyle from "../styles";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // state is a List of friends
  const [state, setState] = useLocalStorageState("friendsApp", {
    defaultValue: defaultData,
  });
  const router = useRouter();

  function addContact(contactId, contactData, friend) {
    setState({ ...state, [contactId]: contactData });
    router.push(`../contacts/${contactId}-${friend.nickname}`);
  }

  function updateContact(contactId, contactData, friend) {
    setState({ ...state, [contactId]: contactData });
    router.push(`../contacts/${contactId}-${friend.nickname}`);
  }

  function updateContactAttempt(contactId, contact_success) {
    const friend = state[contactId];
    const currentContactHistory = friend.contact_history;
    console.log(
      "friend, currentContactHistory:",
      friend,
      currentContactHistory
    );
    const updatedContactHistory = [
      ...currentContactHistory,
      {
        date: String(new Date()),
        contact_success,
      },
    ];
    setState({
      ...state,
      [contactId]: { ...friend, contact_history: updatedContactHistory },
    });
    if (contact_success) {
      router.push(`../contactQuery/aplaus/${contactId}`);
    } else {
      router.push(`../contactQuery/comfort/${contactId}`);
    }
  }

  const deleteContact = (friendId) => {
    const updatedState = { ...state };
    delete updatedState[friendId];
    setState(updatedState);
    router.push("/contacts");
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        state={state}
        addContact={addContact}
        updateContact={updateContact}
        onDelete={deleteContact}
        updateContactAttempt={updateContactAttempt}
      />
    </>
  );
}
