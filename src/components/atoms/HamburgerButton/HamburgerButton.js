import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./HamburgerButton.styles";

const HamburgerButton = ({ openMenu, isOpen, isBlack }) => (
  <StyledHamburgerButton
    aria-label="otwórz menu"
    onClick={openMenu}
    $isopen={isOpen}
  >
    <StyledHamburgerBox>
      <StyledHamburgerInner $isopen={isOpen} $isBlack={isBlack} />
    </StyledHamburgerBox>
  </StyledHamburgerButton>
);

export default HamburgerButton;
