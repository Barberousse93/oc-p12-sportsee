/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import WIPimg from '../assets/WIP.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: relative;
  width: calc(1440px - 117px);
  left: 158px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  background-color: #000;
  padding: 10px;
  border-radius: 200px;
  margin: 10px 0;
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
`
function WIP() {
  return (
    <Container>
      <img src={WIPimg} alt=""></img>
      <StyledLink to="/">Retour à l'accueil</StyledLink>
    </Container>
  )
}

export default WIP
