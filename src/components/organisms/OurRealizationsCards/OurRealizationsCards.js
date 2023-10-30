import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledOurRealizationsCards,
  StyledWrapper,
} from "./OurRealizationsCards.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

import { labels } from "./OurRealizationsCards.data";

const OurRealizationsCards = () => {
  const { allDatoCmsRealizacja } = useStaticQuery(graphql`
    query RealizationsPageQuery {
      allDatoCmsRealizacja {
        edges {
          node {
            zdjecieDoMiniaturki {
              alt
              gatsbyImageData
            }
            title
          }
        }
      }
    }
  `);

  return (
    <StyledOurRealizationsCards>
      <StyledSectionTitle>{labels.title}</StyledSectionTitle>
      <StyledWrapper>
        {/* {allDatoCmsRealizacja.edges.map(({ node }) => (
          
        ))} */}
      </StyledWrapper>
    </StyledOurRealizationsCards>
  );
};

export default OurRealizationsCards;
