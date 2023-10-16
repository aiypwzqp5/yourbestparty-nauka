import * as React from "react";
import { graphql } from "gatsby";

import HeroSection from "../components/organisms/HeroSection/HeroSection";
import YourBestPartySection from "../components/molecules/YourBestPartySection/YourBestPartySection";
import ListSection from "../components/molecules/ListSection/ListSection";

const IndexPage = ({ data: { datoCmsHomepage } }) => (
  <main>
    <HeroSection
      title={datoCmsHomepage.title}
      desc={datoCmsHomepage.description}
      heroImage={datoCmsHomepage.heroImage}
    />
    <YourBestPartySection
      image={datoCmsHomepage.zdjecie}
      title={datoCmsHomepage.tytulSekcjiDrugiej}
      desc={datoCmsHomepage.opisSekcji}
      btnText={datoCmsHomepage.tekstWPrzycisku}
    />
    <ListSection
      image={datoCmsHomepage.zdjecieSekcji}
      title={datoCmsHomepage.tytulSekcji}
      list={datoCmsHomepage.listaPodTytulem}
    />
  </main>
);

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
      tytulSekcji
      tytulSekcjiDrugiej
      zdjecie {
        alt
        gatsbyImageData
      }
      zdjecieSekcji {
        alt
        gatsbyImageData
      }
      opisSekcji
      tekstWPrzycisku
      listaPodTytulem {
        element
        id
      }
    }
  }
`;
