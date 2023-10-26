import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import { StyledContact } from "./Contact.styles"

const Contact = () => {
  const { datoCmsSekcjaKontakt } = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsSekcjaKontakt {
        labelEmail
        labelImie
        labelWiadomo
        tekstWPrzycisku
        tytu
      }
    }
  `)
  
  return (
    <StyledContact>Contact</StyledContact>
  )
}

export default Contact