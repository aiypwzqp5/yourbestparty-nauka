import React from "react";

import { StyledLink } from "./Link.styles";

const Link = ({ url, children, ariaLabel, className }) => (
  <StyledLink to={url} ariaLabel={ariaLabel} className={className}>
    {children}
  </StyledLink>
);

export default Link;
