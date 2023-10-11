import React, { useState } from "react";

import Logo from "../../atoms/Icons/Logo";
import Nav from "../Nav/Nav";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

import { StyledHeader, StyledLogo } from "./Header.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <StyledHeader>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Nav isOpen={isOpen} />
      <HamburgerButton isOpen={isOpen} openMenu={() => setIsOpen(!isOpen)} />
    </StyledHeader>
  );
};

export default Header;
