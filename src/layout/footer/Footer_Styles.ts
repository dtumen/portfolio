import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 16, Fmax: 22 })}
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
}