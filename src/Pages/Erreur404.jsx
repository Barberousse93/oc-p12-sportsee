import React from 'react'
import { Link } from 'react-router-dom'

function Erreur404() {
  return (
    <div>
      <h1>ERREUR 404</h1>
      <Link to="/">Retour au Menu principal</Link>
    </div>
  )
}

export default Erreur404
