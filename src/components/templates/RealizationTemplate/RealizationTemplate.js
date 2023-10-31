import React from "react";

import Button from "../../atoms/Button/Button";

import {
  StyledRealizationTemplate,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledContentWrapper,
} from "./RealizationTemplate.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const RealizationTemplate = () => {
  return (
    <StyledRealizationTemplate>
      <StyledTextWrapper>
        <StyledSectionTitle>dsadsa</StyledSectionTitle>
        <StyledContentWrapper></StyledContentWrapper>
        <Button isLink text={text} href="/kontakt" />
      </StyledTextWrapper>
      <StyledImageWrapper></StyledImageWrapper>
    </StyledRealizationTemplate>
  );
};

export default RealizationTemplate;
