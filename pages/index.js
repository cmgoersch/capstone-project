import useLocalStorageState from "use-local-storage-state";
import defaultData from "@/data.json";
import RandomFunction from "@/components/RandomFunction";
import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/1Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import FriendsCounter from "@/components/FriendsCounter";
import { Fragment } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHomePage = styled.div`
  max-width: 375px;
`;

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;
export default function HomePage() {
  const [data, setData] = useLocalStorageState("friendsApp", {
    defaultValue: defaultData,
  });
  return (
    <>
      <Header />
      <StyledDiv>
        <StyledHomePage>
          <StyledIndex>
            <StyledTitleText>
              Friendships want to be cultivated! Everyone is happy if you just
              get in touch. Who may be happy to hear you today?
            </StyledTitleText>
            <RandomFunction data={data} />
          </StyledIndex>

          <FriendsCounter data={data} />
        </StyledHomePage>
        <StyledFooter>
          <StyledLink href={`/contacts`}>
            {" "}
            All <br /> friends
          </StyledLink>
        </StyledFooter>
      </StyledDiv>
    </>
  );
}
