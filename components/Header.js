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
  background: linear-gradient(
    270deg,
    rgba(0, 150, 64, 1) 13%,
    rgba(47, 172, 102, 1) 29%,
    rgba(0, 102, 51, 1) 58%
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
