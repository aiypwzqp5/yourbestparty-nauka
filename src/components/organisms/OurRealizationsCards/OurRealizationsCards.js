import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledOurRealizationsCards,
  StyledWrapper,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledText,
  StyledFootnote,
  StyledCardLink,
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
            slug
            title
            katering
            liczbaOsB
            skroconyTekstDoMiniaturki
          }
        }
      }
    }
  `);

  return (
    <StyledOurRealizationsCards>
      <StyledSectionTitle>{labels.title}</StyledSectionTitle>
      <StyledWrapper>
        {allDatoCmsRealizacja.edges.map(({ node }) => (
          <StyledCardLink to={`/realizacja/${node.slug}`}>
            <StyledImage>
              <GatsbyImage
                image={getImage(node.zdjecieDoMiniaturki.gatsbyImageData)}
                alt={node.zdjecieDoMiniaturki.alt}
              />
            </StyledImage>
            <StyledContent>
              <StyledTitle>{node.title}</StyledTitle>
              <StyledText>
                {node.skroconyTekstDoMiniaturki
                  ? parse(node.skroconyTekstDoMiniaturki)
                  : null}
              </StyledText>
              <StyledFootnote>
                <p>
                  {labels.catering}:{" "}
                  <span style={{ color: "var(--green)" }}>
                    {node.katering ? "TAK" : "NIE"}
                  </span>
                </p>
                <p>
                  {labels.count}:{" "}
                  <span style={{ color: "var(--green)" }}>
                    {node.liczbaOsB}
                  </span>
                </p>
              </StyledFootnote>
            </StyledContent>
          </StyledCardLink>
        ))}
      </StyledWrapper>
    </StyledOurRealizationsCards>
  );
};

export default OurRealizationsCards;
