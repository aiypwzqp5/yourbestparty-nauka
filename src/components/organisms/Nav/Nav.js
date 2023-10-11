import React from "react";

import { StyledNav } from "./Nav.styles";
import Link from "../../atoms/Link/Link";
import { NavLabels } from "./Nav.data";

const Nav = ({ isOpen }) => {
  const isColorWhite = isOpen ? "color--black" : null;

  return (
    <StyledNav $isOpen={isOpen}>
      <Link url="kontakt" className={isColorWhite}>
        {NavLabels.CONTACT}
      </Link>
      <Link url="realizacje" className={isColorWhite}>
        {NavLabels.REALIZATIONS}
      </Link>
    </StyledNav>
  );
};

export default Nav;
