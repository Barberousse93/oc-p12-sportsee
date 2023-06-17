import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from '../Pages/Menu.jsx'
import Resultats from '../Pages/Resultats.jsx'
import Erreur404 from '../Pages/Erreur404.jsx'
import WIP from '../Pages/WIP.jsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/resultats/:ID" element={<Resultats />}></Route>
      <Route path="/WIP" element={<WIP />}></Route>
      {/* <Route path="/error" element={<Erreur404 />}></Route>*/}
      <Route path="*" element={<Erreur404 />}></Route>
    </Routes>
  )
}

export default Router
