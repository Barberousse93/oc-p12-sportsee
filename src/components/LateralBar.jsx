import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/colors.jsx'
import yoga from '../assets/yoga.png'
import velo from '../assets/velo.png'
import natation from '../assets/natation.png'
import haltere from '../assets/haltere.png'

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 117px;
  height: 1024px;
  background-color: ${colors.primary};
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Copyright = styled.p`
  position: relative;
  font-size: 12px;
  font-weight: 500;
  width: 200px;
  color: ${colors.textOnDark};
  margin-bottom: 150px;
  transform: rotate(-90deg);
`
const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 316px;
  justify-content: space-between;
  top: 30%;
`

/**
 * Barre latérale avec menu de navigation
 * @returns LateralBar
 */
const LateralBar = () => {
  return (
    <Container>
      <StyledNav>
        <Link to="/WIP">
          <img src={yoga} alt="yoga"></img>
        </Link>
        <Link to="/WIP">
          <img src={natation} alt="natation"></img>
        </Link>
        <Link to="/WIP">
          <img src={velo} alt="vélo"></img>
        </Link>
        <Link to="/WIP">
          <img src={haltere} alt="haltere"></img>
        </Link>
      </StyledNav>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </Container>
  )
}

export default LateralBar
