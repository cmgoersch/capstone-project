import Header from "@/components/Header";
import { StyledLink } from "@/components/Link/Link.Styled";
import { StyledFooter } from "@/components/GeneralStyle/Footer.Styled";
import styled from "styled-components";
import ContactForm from "@/components/Form/ContactForm";
import { v4 as uuidv4 } from "uuid";
import {
  CONTACT_TYPE_LANDLINE,
  CONTACT_TYPE_MOBILE,
  CONTACT_TYPE_SIGNAL,
  CONTACT_TYPE_TELEGRAM,
  CONTACT_TYPE_MAIL,
  CONTACT_TYPE_INSTAGRAM,
  CONTACT_TYPE_TWITTER,
  CONTACT_TYPE_LINKEDIN,
} from "@/lib/constants";
import UpdateContactForm from "@/components/Form/ContactForm";

function newFriend() {
  return {
    profilePicture: "",
    nickname: "",
    first_name: "",
    last_name: "",
    birthday: "",
    friendship_status: "",
    hobbies: "",
    city: "",
    contactOptions: [
      {
        type: CONTACT_TYPE_MOBILE,
        name: "Mobile",
        number: "",
      },
      {
        type: CONTACT_TYPE_LANDLINE,
        name: "Landline",
        number: "",
      },
      {
        type: CONTACT_TYPE_SIGNAL,
        name: "Signal",
        number: "",
      },
      {
        type: CONTACT_TYPE_TELEGRAM,
        name: "Telegram",
        address: "",
      },
      {
        type: CONTACT_TYPE_MAIL,
        name: "Mail",
        address: "",
      },
      {
        type: CONTACT_TYPE_INSTAGRAM,
        name: "Instagram",
        address: "",
      },
      {
        type: CONTACT_TYPE_TWITTER,
        name: "Twitter",
        address: "",
      },
      {
        type: CONTACT_TYPE_LINKEDIN,
        name: "linkedIn",
        address: "",
      },
    ],
  };
}

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

export default function AddContact({ addContact }) {
  const friendId = uuidv4().replaceAll("-", "");
  return (
    <StyledAddContact>
      <Header />
      <>
        <StyledDiv>
          <StyledWidth>
            <StyledTitleText>Add new friend</StyledTitleText>
            <StyledNewContactForm>
              <ContactForm
                onSubmit={addContact}
                friendId={friendId}
                friend={newFriend()}
              />
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
