import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import { StyledFAQSection } from './FAQSection.styles'

const FAQSection = () => {
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
  `)

  return (
    <StyledFAQSection>FAQSection</StyledFAQSection>
  )
}

export default FAQSection