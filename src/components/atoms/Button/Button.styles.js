import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--orange);
  color: var(--white);
  padding: 22px 62px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 39px;
  border: none;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: var(--dark-gray);
    color: var(--white);
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 3px;
  }
`;
