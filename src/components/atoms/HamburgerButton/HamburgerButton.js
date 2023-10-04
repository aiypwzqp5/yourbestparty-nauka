import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./HamburgerButton.styles";

const HamburgerButton = ({ openMenu, isOpen }) => (
  <StyledHamburgerButton
    aria-label="otwórz menu"
    onClick={openMenu}
    $isopen={isOpen}
  >
    <StyledHamburgerBox isopen={isOpen}>
      <StyledHamburgerInner isopen={isOpen} />
    </StyledHamburgerBox>
  </StyledHamburgerButton>
);

export default HamburgerButton;
