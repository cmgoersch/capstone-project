import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";
import ProfilePictureSelect from "../Picture/ProfilePictureSelect";
import { StyledButton } from "../Button/Button.Styled";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
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

const StyledNewContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 0.4rem;
  padding: 1rem;
  text-align: left;
  color: white;

  width: 375px;
`;

const StyledInput = styled.input`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: none;
`;

const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: none;
`;

const StyledButtonPosition = styled.div`
  display: flex;
  justify-content: center;
`;

function UpdateContactForm({ addContact }) {
  const router = useRouter();
  const numberTypes = [
    CONTACT_TYPE_MOBILE,
    CONTACT_TYPE_LANDLINE,
    CONTACT_TYPE_SIGNAL,
  ];
  const [formData, setFormData] = useState({
    id: uuidv4().replaceAll("-", ""),
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
  });

  const handleInputChange = (event, data) => {
    const { name, value } = event.currentTarget;

    if (name === "profileIconSource") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: data,
      }));
    } else if (name === "hobbies") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value.split(","),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleContactOptionChange = (event) => {
    const { name, value } = event.currentTarget;
    const { contactOptions } = formData;
    const index = contactOptions.findIndex(
      (contactOption) => contactOption.type === name
    );

    if (numberTypes.includes(contactOptions[index].type)) {
      contactOptions[index].number = value;
    } else {
      contactOptions[index].address = value;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      contactOptions,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.profileIconSource) {
      alert("Please select a profile picture");
      return;
    }
    addContact(formData);
    router.push("/contacts");
  };

  return (
    <>
      <StyledNewContactForm onSubmit={handleSubmit}>
        <label htmlFor="profileIconSource"></label>
        <ProfilePictureSelect
          selectedPicture={formData.profileIconSource}
          handlePictureSelect={handleInputChange}
        />
        <h3>Personal Information</h3>
        <label htmlFor="nickname">Nickname:</label>
        <StyledInput
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="first_name">First Name:</label>
        <StyledInput
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="last_name">Last Name:</label>
        <StyledInput
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />

        <label htmlFor="birthday">Birthday:</label>
        <StyledInput
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
        />

        <label htmlFor="friendship_status">Friendship Status:</label>
        <StyledSelect
          id="friendship_status"
          name="friendship_status"
          value={formData.friendship_status}
          onChange={handleInputChange}
        >
          <option value="set Status" disabled>
            Set status
          </option>
          <option value="Friend">Friend</option>
          <option value="Best Friend">Best Friend</option>
          <option value="Gold Friend">Gold Friend</option>
          <option value="Family">Family</option>
          <option value="Sister">Sister</option>
          <option value="Sister from another mister">
            Sister from another mister
          </option>
          <option value="Brother">Brother</option>
          <option value="Brother from an other mother">
            Brother from an other mother
          </option>
          <option value="New">New</option>
          <option value="I think about">i think about</option>
        </StyledSelect>

        <label htmlFor="hobbies">Hobbies:</label>
        <StyledInput
          type="text"
          id="hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleInputChange}
        />

        <label htmlFor="city">City:</label>
        <StyledInput
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />

        <h3>Contact Options:</h3>
        {formData.contactOptions.map((contactOption) => (
          <Fragment key={contactOption.type}>
            <label htmlFor={contactOption.type}>{contactOption.name}</label>
            {numberTypes.includes(contactOption.type) ? (
              <StyledInput
                type={contactOption.type}
                id={contactOption.type}
                name={contactOption.type}
                placeholder={`Insert ${contactOption.name} Number`}
                value={contactOption.number}
                onChange={handleContactOptionChange}
              />
            ) : (
              <StyledInput
                type={contactOption.type}
                id={contactOption.type}
                name={contactOption.type}
                placeholder={`Insert ${contactOption.name} Address`}
                value={contactOption.address}
                onChange={handleContactOptionChange}
              />
            )}
          </Fragment>
        ))}
        <StyledButtonPosition>
          <StyledButton type="submit">
            Update <br />
            Conact
          </StyledButton>
        </StyledButtonPosition>
      </StyledNewContactForm>
    </>
  );
}

export default UpdateContactForm;
