import React from "react";
import styled from "styled-components";
import { SettingsIcon } from "../assets/icons/SettingsIcon";

export const NavbarComponent = styled.nav`
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: #f3f3f3;
`;

function Navbar() {
  return (
    <NavbarComponent>
      <SettingsIcon />
    </NavbarComponent>
  );
}

export { Navbar };
