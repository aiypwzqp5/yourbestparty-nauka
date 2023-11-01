import React from "react";

import { StyledNav } from "./Nav.styles";
import Link from "../../atoms/Link/Link";
import { NavLabels } from "./Nav.data";

const Nav = ({ isOpen, isBlack }) => {
  const isMobileColorWhite = isBlack
    ? "color--always-black"
    : isOpen
    ? "color--black"
    : null;

  return (
    <StyledNav $isOpen={isOpen}>
      <Link url="/kontakt" className={isMobileColorWhite}>
        {NavLabels.CONTACT}
      </Link>
      <Link url="/nasze-realizacje" className={isMobileColorWhite}>
        {NavLabels.REALIZATIONS}
      </Link>
    </StyledNav>
  );
};

export default Nav;
