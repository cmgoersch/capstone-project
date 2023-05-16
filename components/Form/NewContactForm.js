import { Fragment } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import styled from "styled-components";
import ProfilePictureSelect from "../Picture/ProfilePictureSelect";
import { StyledButton } from "../Button/Button.Styled";
import { useRouter } from "next/router";

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

function NewContactForm() {
  const [data, setData] = useLocalStorageState("friendsApp");

  const router = useRouter();
  const numberTypes = ["mobile", "landline", "signal"];
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000000),
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
        type: "mobile",
        name: "Mobile:",
        number: "",
        iconSource: "/contact/mobile.png",
      },
      {
        type: "Landline",
        name: "Landline:",
        number: "",
        iconSource: "/contact/landline.png",
      },
      {
        type: "signal",
        name: "Signal:",
        number: "",
        iconSource: "/contact/signal.png",
      },
      {
        type: "telegram",
        name: "Telegram:",
        address: "",
        iconSource: "/contact/telegram.png",
      },
      {
        type: "mail",
        name: "Mail:",
        address: "",
        iconSource: "/contact/mail.png",
      },
      {
        type: "instagram",
        name: "Instagram:",
        address: "",
        iconSource: "/contact/instagram.png",
      },
      {
        type: "twitter",
        name: "Twitter:",
        address: "",
        iconSource: "/contact/twitter.png",
      },
      {
        type: "linkedIn",
        name: "linkedIn:",
        address: "",
        iconSource: "/contact/linkedIn.png",
      },
    ],
  });

  const handleInputChange = (e, data) => {
    const { name, value } = e.currentTarget;

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
    setData((prevData) => [...prevData, formData]);
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
          <option value="set Status">Set status</option>
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
            Save new <br />
            Conact
          </StyledButton>
        </StyledButtonPosition>
      </StyledNewContactForm>
    </>
  );
}

export default NewContactForm;
