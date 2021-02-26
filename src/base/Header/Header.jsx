import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  padding: 0 2.4rem;
  text-align: center;
  padding-top: 14.2rem;
  margin-bottom: 5.6rem;
  transition: var(--transition) padding;
  @media (min-width: 768px) {
    padding-top: 6rem;
  }

  @media (min-width: 768px) and (min-height: 790px) {
    padding-top: 12rem;
    margin-bottom: 9.1rem;
  }
`

const StyledHeading = styled.h1`
  font-size: 1.8rem;
  line-height: 2.3rem;
  letter-spacing: .614rem;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: var(--weight-bold);

  @media (min-width: 768px) {
    font-size: 2.2rem;
    line-height: 2.9rem;
    letter-spacing: .75rem;
  }
`

export const Header = () => {
  return (
    <HeaderStyled>
      <StyledHeading>We're launching soon</StyledHeading>
    </HeaderStyled>
  )
}