import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  StyledListSection,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledList,
} from "./ListSection.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const ListSection = ({ image, title, list }) => (
  <StyledListSection>
    <StyledContentWrapper>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledList>
        {list.map(({ element, id }) => (
          <li key={id}>{element}</li>
        ))}
      </StyledList>
    </StyledContentWrapper>
    <StyledImageWrapper>
      <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
    </StyledImageWrapper>
  </StyledListSection>
);

export default ListSection;
