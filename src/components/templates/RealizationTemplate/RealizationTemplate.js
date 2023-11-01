import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Button from "../../atoms/Button/Button";

import {
  StyledRealizationTemplate,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledContentWrapper,
} from "./RealizationTemplate.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const RealizationTemplate = ({ data: { datoCmsRealizacja } }) => {
  return (
    <StyledRealizationTemplate>
      <StyledTextWrapper>
        <StyledSectionTitle>
          {parse(datoCmsRealizacja.trescArtykulu)}
        </StyledSectionTitle>
        <StyledContentWrapper></StyledContentWrapper>
        <Button isLink text="KONTAKT" href="/kontakt" />
      </StyledTextWrapper>
      <StyledImageWrapper></StyledImageWrapper>
    </StyledRealizationTemplate>
  );
};

export default RealizationTemplate;

export const query = graphql`
  query RealizationPageQuery($realizationId: String) {
    datoCmsRealizacja(id: { eq: $realizationId }) {
      id
      slug
      duzeZdjCie {
        alt
        gatsbyImageData
      }
      title
      trescArtykulu
    }
  }
`;
