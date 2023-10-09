import { css } from "styled-components";

export const focusVisibleStyles = css`
  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 3px;
  }
`;
