import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Circle from "../../atoms/Icons/Circle";

import {
  StyledListSection,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledList,
  StyledCircleWrapper,
} from "./ListSection.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const ListSection = ({ image, title, list }) => (
  <StyledListSection>
    <StyledCircleWrapper>
      <Circle />
    </StyledCircleWrapper>
    <StyledImageWrapper>
      <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
    </StyledImageWrapper>
    <StyledContentWrapper>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledList>
        {list.map(({ element, id }) => (
          <li key={id}>{element}</li>
        ))}
      </StyledList>
    </StyledContentWrapper>
  </StyledListSection>
);

export default ListSection;
