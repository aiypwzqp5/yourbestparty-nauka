import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ text, type }) => (
  <StyledButton type={type}>{text}</StyledButton>
);

export default Button;
