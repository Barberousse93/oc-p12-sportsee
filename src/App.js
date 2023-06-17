import React from 'react'
import './App.css'
import Router from './utils/Router.jsx'
import Header from './components/Header.jsx'
import LateralBar from './components/LateralBar.jsx'

function App() {
  
  return (
    <div className="App">
      <Header/>      
      <Router />
      <LateralBar/>
    </div>
  )
}

export default App
