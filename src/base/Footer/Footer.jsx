import React from 'react'
import { IconFacebook } from '../Icon/IconFacebook'
import { IconInstagram } from '../Icon/IconInstagram'
import { IconPinterest } from '../Icon/IconPinterest'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  margin-top: auto;
  height: 16.8rem;
  background-repeat: no-repeat;
  background-position: bottom right -20rem;
  background-image: url(../base/Icon/icons/pattern-hills.svg);
  @media (min-width: 768px) {
    height: 19.6rem;
    background-size: cover;
    background-position: top center;
  }
`

const FooterIcon = styled.div`
  display: flex;
  width: 13.6rem;
  margin: 9.6rem auto 0;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin: 10.1rem auto 0;
  }
`

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterIcon>
        <a className="footer__icon" href="https://www.facebook.com/">
          <span className="sr-only">facebook link</span>
          <IconFacebook />
        </a>
        <a className="footer__icon" href="https://www.pinterest.com/">
          <span className="sr-only">pinterest link</span>
          <IconInstagram />
        </a>
        <a className="footer__icon" href="https://www.instagram.com/">
          <span className="sr-only">instagram link</span>
          <IconPinterest />
        </a>
      </FooterIcon>      
    </FooterStyled>
  )
}