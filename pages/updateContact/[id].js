import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import ContactForm from "@/components/Form/ContactForm";
import { useRouter } from "next/router";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWidth = styled.div`
  max-width: 375px;
`;

const StyledTitleText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin: 1.4rem;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function UpdateContact({ state, updateContact }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null;
  }
  const idPath = id.split("-");
  const friend = state.find((element) => element.id == idPath[0]);
  console.log("friendtest:", friend);

  return (
    <StyledContact>
      <Header />
      <>
        <StyledDiv>
          <StyledWidth>
            <StyledTitleText>Update friend data</StyledTitleText>
            <StyledContactForm>
              <ContactForm onSubmit={updateContact} friend={friend} />
            </StyledContactForm>
          </StyledWidth>
        </StyledDiv>
      </>

      <StyledFooter>
        <StyledLink href={`/contacts`}>back</StyledLink>
      </StyledFooter>
    </StyledContact>
  );
}
