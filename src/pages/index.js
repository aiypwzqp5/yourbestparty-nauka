import * as React from "react";
import { graphql } from "gatsby";

import HeroSection from "../components/organisms/HeroSection/HeroSection";

const IndexPage = ({ data: { datoCmsHomepage } }) => {
  return (
    <main>
      <HeroSection
        title={datoCmsHomepage.title}
        desc={datoCmsHomepage.desc}
        heroImage={datoCmsHomepage.heroImage}
      />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query homePageQuery {
    datoCmsHomepage {
      description
      title
      heroImage {
        alt
        gatsbyImageData
      }
    }
  }
`;
