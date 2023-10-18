import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import RealizationCard from "../../atoms/RealizationCard/RealizationCard";

const OurRealizations = () => {
  const data = useStaticQuery(graphql`
    query Realizations {
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
    <div>
      {data.allDatoCmsRealizacja.edges.map(({ node }) => (
        <RealizationCard
          key={node.title}
          image={node.zdjecieDoMiniaturki}
          title={node.title}
        />
      ))}
    </div>
  );
};

export default OurRealizations;
