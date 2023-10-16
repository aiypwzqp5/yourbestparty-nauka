import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../../atoms/Button/Button";

import {
  StyledYourBestPartySection,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledDesc,
} from "./YourBestPartySection.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const YourBestPartySection = ({ image, title, desc, btnText }) => (
  <StyledYourBestPartySection>
    <StyledImageWrapper>
      <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
    </StyledImageWrapper>
    <StyledTextWrapper>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledDesc>{desc}</StyledDesc>
      <Button type="button" text={btnText} />
    </StyledTextWrapper>
  </StyledYourBestPartySection>
);

export default YourBestPartySection;
