import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import NewContactForm from "@/components/Form/NewContactForm";

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

const StyledAddContent = styled.div`
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

export default function AddContact() {
  return (
    <StyledAddContent>
      <Header />
      <>
        <StyledDiv>
          <StyledWidth>
            <StyledTitleText>Add new friend</StyledTitleText>
            <StyledNewContactForm>
              <NewContactForm />
            </StyledNewContactForm>
          </StyledWidth>
        </StyledDiv>
      </>

      <StyledFooter>
        <StyledLink href={`/contacts`}>back</StyledLink>
      </StyledFooter>
    </StyledAddContent>
  );
}
