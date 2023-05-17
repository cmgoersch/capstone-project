import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import UpdateContactForm from "@/components/Form/UpdateContactForm";

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

const StyledAddContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-wrap: wrap;
  text-align: center;
`;

const StyledNewContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function UpdateContact({ addContact }) {
  return (
    <StyledAddContact>
      <Header />
      <>
        <StyledDiv>
          <StyledWidth>
            <StyledTitleText>Update friend data</StyledTitleText>
            <StyledNewContactForm>
              <UpdateContactForm addContact={addContact} />
            </StyledNewContactForm>
          </StyledWidth>
        </StyledDiv>
      </>

      <StyledFooter>
        <StyledLink href={`/contacts`}>back</StyledLink>
      </StyledFooter>
    </StyledAddContact>
  );
}
