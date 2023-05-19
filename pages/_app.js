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

  function addContact(contactId, contactData) {
    setState({ ...state, [contactId]: contactData });
    router.push("/contacts");
  }

  function updateContact(contactId, contactData) {
    setState({ ...state, [contactId]: contactData });
    router.push("/contacts");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        state={state}
        addContact={addContact}
        updateContact={updateContact}
      />
    </>
  );
}
