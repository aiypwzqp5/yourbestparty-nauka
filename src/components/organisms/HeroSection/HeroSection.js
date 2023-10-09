import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledHeroSection,
  StyledImageWrapper,
  StyledContentWrapper,
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
        <h1>{title}</h1>
        <p>{desc}</p>
      </StyledContentWrapper>
    </StyledHeroSection>
  );
};

export default HeroSection;
