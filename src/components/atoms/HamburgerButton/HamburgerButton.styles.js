import styled from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

export const StyledHamburgerButton = styled.button`
  cursor: pointer;
  border: 0;
  width: 36px;
  height: 34px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;

  ${focusVisibleStyles};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const StyledHamburgerInner = styled.span`
  width: 36px;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 2px;
  transition: background-color 250ms linear;
  background-color: ${({ $isopen, $isBlack }) =>
    $isBlack ? "var(--black)" : $isopen ? "transparent" : "var(--white)"};

  &::after {
    content: "";
    left: 0;
    width: ${({ $isopen }) => ($isopen ? "36px" : "24px")};
    height: 3px;
    position: absolute;
    background-color: ${({ $isopen, $isBlack }) =>
      $isBlack ? "var(--black)" : $isopen ? "transparent" : "var(--white)"};
    top: 8px;
    border-radius: 3px;
    transform: ${({ $isopen }) =>
      $isopen ? "rotate(-45deg) translate(7px, -6px)" : "rotate(0)"};
    transition: transform 250ms linear;
  }

  &::before {
    content: "";
    left: 0;
    width: 36px;
    height: 3px;
    position: absolute;
    background-color: ${({ $isopen, $isBlack }) =>
      $isBlack ? "var(--black)" : $isopen ? "transparent" : "var(--white)"};
    top: -8px;
    border-radius: 2px;
    transform: ${({ $isopen }) =>
      $isopen ? "rotate(45deg) translate(5px, 4px)" : "rotate(0)"};
    transition: transform 250ms linear;
  }
`;
