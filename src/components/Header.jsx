import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 91px;
  background-color: ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
`
const Styledlogo = styled.img`
  width: 178px;
  margin-left: 25px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  margin-right: 25px;

  color: ${colors.textOnDark};
`

function Header() {
  return (
    <Container>
      <Styledlogo src={logo} alt=""></Styledlogo>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/WIP">Profil</StyledLink>
      <StyledLink to="/WIP">Réglage</StyledLink>
      <StyledLink to="/WIP">Communauté</StyledLink>
    </Container>
  )
}

export default Header
