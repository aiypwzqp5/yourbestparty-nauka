import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { StyledBottomWrapper, StyledFooter, StyledHeading, StyledLinks } from './Footer.styles'
import Link from '../../atoms/Link/Link'
import { labels } from './Footer.data'

const Footer = () => {
  const { datoCmsStopka } = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsStopka {
        info
      }
    }
  `)

  return (
    <StyledFooter>
      <StyledHeading>
        {labels.logo}
      </StyledHeading>
      <StyledLinks>
        <Link url="/contact">
          {labels.kontakt}
        </Link>
        <Link url="/realizacje">
          {labels.realizacje}
        </Link>
      </StyledLinks>
      <StyledBottomWrapper>
        <p>{datoCmsStopka.info}{new Date().getFullYear()}</p>
      </StyledBottomWrapper>
    </StyledFooter>
  )
}

export default Footer
