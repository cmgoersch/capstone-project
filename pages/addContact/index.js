import Header from "@/components/Header";
import styled from "styled-components";
import NewContactForm from "@/components/Form/NewContactForm";

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledAddContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default function AddContact() {
  return (
    <StyledAddContent>
      <Header />
      <StyledTitleText>
        Friendships want to be cultivated! Everyone is happy if you just get in
        touch. Who may be happy to hear you today?
      </StyledTitleText>
      <NewContactForm />
    </StyledAddContent>
  );
}
