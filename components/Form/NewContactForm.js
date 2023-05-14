import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import styled from "styled-components";
import ProfilePictureSelect from "../Picture/ProfilePictureSelect";
import { StyledButton } from "../Button/Button.styled";
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

function NewContactForm() {
  const [data, setData] = useLocalStorageState("friendsApp");

  const router = useRouter();

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
  });

  const handleInputChange = (e, data) => {
    console.log(e);
    const { name, value } = e.currentTarget;

    if (name === "profileIconSource") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: data,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleContactOptionChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      contactOptions: {
        ...prevFormData.contactOptions,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formData]);
    router.push("/contacts");
  };

  return (
    <StyledNewContactForm onSubmit={handleSubmit}>
      <label htmlFor="profileIconSource">Profile Picture:</label>
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
      />

      <label htmlFor="first_name">First Name:</label>
      <StyledInput
        type="text"
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={handleInputChange}
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
        name="Hobbies"
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
      {/* 
      <h3>Contact Options:</h3>
      <label htmlFor="Mobile">Mobile:</label>
      <StyledInput
        type="number"
        id="Mobile"
        name="Mobile"
        placeholder="Insert Mobile Number"
        value={formData.contactOptions.Mobile}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Landline">Landline:</label>
      <StyledInput
        type="text"
        id="Landline"
        name="Landline"
        placeholder="Insert Landline Number"
        value={formData.contactOptions.Landline}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Signal">Signal:</label>
      <StyledInput
        type="text"
        id="Signal"
        name="Signal"
        placeholder="Insert Signal Number"
        value={formData.contactOptions.Signal}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Telegram">Telegram:</label>
      <StyledInput
        type="text"
        id="Telegram"
        name="Telegram"
        placeholder="Insert Telegram Number or Username"
        value={formData.contactOptions.Telegram}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Mail">Mail:</label>
      <StyledInput
        type="Mail"
        id="Mail"
        name="Mail"
        placeholder="Insert Email Address"
        value={formData.contactOptions.Mail}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Instagram">Instagram:</label>
      <StyledInput
        type="Instagram"
        id="Instagram"
        name="Instagram"
        placeholder="Insert Instagram"
        value={formData.contactOptions.Instagram}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="Twitter">Twitter:</label>
      <StyledInput
        type="Twitter"
        id="Twitter"
        name="Twitter"
        placeholder="Insert Twitter"
        value={formData.contactOptions.Twitter}
        onChange={handleContactOptionChange}
      />

      <label htmlFor="LinkedIn">LinkedIn:</label>
      <StyledInput
        type="LinkedIn"
        id="LinkedIn"
        name="LinkedIn"
        placeholder="Insert LinkedIn"
        value={formData.contactOptions.LinkedIn}
        onChange={handleContactOptionChange}
      /> */}
      <div>
        <StyledButton type="submit">Save new Conact</StyledButton>
      </div>
    </StyledNewContactForm>
  );
}

export default NewContactForm;
