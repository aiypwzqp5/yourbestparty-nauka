import styled from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

export const StyledButton = styled.button`
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

  ${focusVisibleStyles};
`;
