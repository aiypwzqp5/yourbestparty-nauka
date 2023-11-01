import React, { useState } from "react";
import { useLocation } from "@reach/router";

import Logo from "../../atoms/Icons/Logo";
import Nav from "../Nav/Nav";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

import { StyledHeader, StyledLogo } from "./Header.styles";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState();

  const isOurRealizationsPage =
    location.pathname === "/nasze-realizacje/" ||
    location.pathname.includes("/realizacja/");

  return (
    <StyledHeader>
      <StyledLogo>
        <Logo
          isBlack={location.pathname === "/kontakt/" || isOurRealizationsPage}
        />
      </StyledLogo>
      <Nav isBlack={isOurRealizationsPage} isOpen={isOpen} />
      <HamburgerButton
        isBlack={isOurRealizationsPage}
        isOpen={isOpen}
        openMenu={() => setIsOpen(!isOpen)}
      />
    </StyledHeader>
  );
};

export default Header;
