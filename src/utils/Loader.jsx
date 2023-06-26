import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../utils/colors.jsx'

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}  
`
const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Ext = styled.div`
  width: 100px;
  height: 100px;
  display: grid;
  border: 8px solid transparent;
  border-radius: 50%;
  border-color: ${colors.primary} transparent;
  animation: ${rotate} 1s infinite linear;
  &:before,
  &:after {
    content: '';
    grid-area: 1/1;
    margin: 6px;
    border: inherit;
    border-radius: 50%;
  }
  &:before {
    border-color: ${colors.secondary} transparent;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }
  &:after {
    margin: 20px;
  }
`
/**
 * 
 * @returns Loader
 */
function Loader() {
  return (
    <Container data-testid="loader">
      <Ext></Ext>
    </Container>
  )
}

export default Loader
