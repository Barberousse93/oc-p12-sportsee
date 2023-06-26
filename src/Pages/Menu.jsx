import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  color: #fff;
  background-color: #000;
  padding: 30px;
  border-radius: 40px;
  margin: 20px 0;
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
`
const StyledDiv = styled.div`
  position: relative;
  width: calc(1440px - 117px);
  left: 158px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
/**
 * Page provisoire pour sélectionner les utilsateurs sans avoir à intervenir dans la barre d'addresse
 * @returns Menu 
 */
function Menu() {
  return (
    <StyledDiv>
      <StyledLink to="/resultats/12">Utilisateur 1</StyledLink>
      <StyledLink to="/resultats/18">Utilisateur 2</StyledLink>
    </StyledDiv>
  )
}

export default Menu
