import styled, { css } from "styled-components";

export const focusVisibleStyles = css`
  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 3px;
  }
`;

export const StyledSectionTitle = styled.h2`
  font-size: clamp(32px, 2.5vw, 48px);
  text-align: ${({ $mobileTextAlign }) => $mobileTextAlign ?? "left"};

  @media only screen and (min-width: 768px) {
    text-align: ${({ $mobileTextAlign, $desktopTextAlign }) =>
      $desktopTextAlign ? $desktopTextAlign : $mobileTextAlign ?? "left"};
  }
`;

export const StyledGlobalWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
