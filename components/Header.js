import React from "react";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHeaderBox = styled.div`
  z-index: 300;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  padding: 30px 20px 20px 20px;
  text-align: center;
  background: rgb(0, 150, 64);
  background: radial-gradient(
    circle at 30% 107%,
    rgba(0, 150, 64, 1) 13%,
    rgba(36, 139, 81, 1) 33%,
    rgba(24, 102, 0, 1) 64%
  );
`;

const HeaderText = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  margin: 2px;
`;

export default function Header() {
  return (
    <StyledHeaderBox>
      <HeaderText>Better-Friend-App</HeaderText>
    </StyledHeaderBox>
  );
}
