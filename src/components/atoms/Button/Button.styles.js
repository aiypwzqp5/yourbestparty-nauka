import styled, { css } from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";
import { Link } from "gatsby";

const basicStyles = css`
  background-color: var(--orange);
  color: var(--white);
  padding: 12px 0;
  font-size: 20px;
  font-weight: 500;
  border-radius: 39px;
  border: none;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  width: 100%;

  &:hover {
    background-color: var(--dark-gray);
    color: var(--white);
  }

  @media only screen and (min-width: 768px) {
    padding: 22px 62px;
    max-width: 216px;
  }
`;

export const StyledButton = styled.button`
  ${basicStyles};

  ${focusVisibleStyles};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  ${basicStyles}
`;
