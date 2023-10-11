import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledHeroSection,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledTitle,
  StyledDesc,
} from "./HeroSection.styles";

const HeroSection = ({ heroImage, title, desc }) => {
  return (
    <StyledHeroSection>
      <StyledImageWrapper>
        <GatsbyImage
          image={getImage(heroImage.gatsbyImageData)}
          alt={heroImage.alt}
        />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
      </StyledContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;
