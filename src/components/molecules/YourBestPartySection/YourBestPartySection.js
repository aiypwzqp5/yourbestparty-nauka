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
    <StyledTextWrapper>
      <StyledSectionTitle $mobileTextAlign="center">{title}</StyledSectionTitle>
      <StyledDesc>{desc}</StyledDesc>
      <Button type="button" text={btnText} />
    </StyledTextWrapper>
    <StyledImageWrapper>
      <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
    </StyledImageWrapper>
  </StyledYourBestPartySection>
);

export default YourBestPartySection;
