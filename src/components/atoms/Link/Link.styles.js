import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 20px;
  transition: color 250ms linear;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 3px;
  }

  &:hover {
    color: var(--red);
  }
`;
