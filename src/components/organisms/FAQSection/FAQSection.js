import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FAQElement from "../../atoms/FAQElement/FAQElement";

import { StyledFAQSection, StyledElements } from "./FAQSection.styles";
import { StyledSectionTitle } from "../../../styles/sharedStyles";

const FAQSection = ({ isContactPage }) => {
  const { datoCmsSekcjaFaq } = useStaticQuery(graphql`
    query FaqQuery {
      datoCmsSekcjaFaq {
        tytu
        pytaniaIOdpowiedzi {
          pytanie
          odpowied
          id
        }
      }
    }
  `);

  return (
    <StyledFAQSection $isContactPage={isContactPage}>
      <StyledSectionTitle style={{ color: "#fff" }}>
        {datoCmsSekcjaFaq.tytu}
      </StyledSectionTitle>
      <StyledElements>
        {datoCmsSekcjaFaq.pytaniaIOdpowiedzi.map(
          ({ pytanie, odpowied, id }) => (
            <FAQElement key={id} question={pytanie} answer={odpowied} />
          )
        )}
      </StyledElements>
    </StyledFAQSection>
  );
};

export default FAQSection;
