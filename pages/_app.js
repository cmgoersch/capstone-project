import useLocalStorageState from "use-local-storage-state";
import defaultData from "@/data.json";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [data, setData] = useLocalStorageState("friendsApp", {
    defaultValue: defaultData,
  });

  function addContact(newContact) {
    setData([...data, newContact]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} addContact={addContact} />
    </>
  );
}
