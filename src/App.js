import React from 'react'
import './App.css'
import styled from 'styled-components'

const Test = styled.h1`
  color: blue;
`

function App() {
  return (
    <div className="App">
      <Test>Hello World !</Test>
      <h2>Ready to code ?</h2>
    </div>
  )
}

export default App
