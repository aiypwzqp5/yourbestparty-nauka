import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Slider from "react-slick";

import RealizationCard from "../../atoms/RealizationCard/RealizationCard";

import {
  StyledOurRealizations,
  StyledSliderWrapper,
} from "./OurRealizations.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

import { OurRealizationsLabels } from "./OurRealizations.data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurRealizations = () => {
  const data = useStaticQuery(graphql`
    query Realizations {
      allDatoCmsRealizacja {
        edges {
          node {
            slug
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <StyledOurRealizations>
      <StyledSectionTitle $desktopTextAlign="center">
        {OurRealizationsLabels.heading}
      </StyledSectionTitle>
      <StyledSliderWrapper>
        <Slider {...settings}>
          {data.allDatoCmsRealizacja.edges.map(({ node }) => (
            <Link to={`/realizacja/${node.slug}`}>
              <RealizationCard
                key={node.title}
                image={node.zdjecieDoMiniaturki}
                title={node.title}
              />
            </Link>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </StyledOurRealizations>
  );
};

export default OurRealizations;
