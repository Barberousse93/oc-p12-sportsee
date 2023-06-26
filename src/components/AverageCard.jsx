import React from 'react'
import styled from 'styled-components'
import calories from '../assets/calories-icon.png'
import proteines from '../assets/protein-icon.png'
import glucides from '../assets/carbs-icon.png'
import lipides from '../assets/fat-icon.png'
import colors from '../utils/colors.jsx'

const Container = styled.div`
  width: 258px;
  height: 124px;
  border-radius: 5px;
  background-color: ${colors.backGroundComponents};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`
const Valeurs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Valeur = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.textOnClear};
`
const Unite = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.ligthText};
`
const Icone = styled.img`
  width: 60px;
  height: 60px;
`
/**
 * 
 * @param {object} donnees 
 * @returns AverageCard
 */
function AverageCard(donnees) {
  const dico = {
    calorieCount: {
      icone: calories,
      unite: 'kCal',
      legende: 'Calories',
    },
    proteinCount: {
      icone: proteines,
      unite: 'g',
      legende: 'Proteines',
    },
    carbohydrateCount: {
      icone: glucides,
      unite: 'g',
      legende: 'Glucides',
    },
    lipidCount: {
      icone: lipides,
      unite: 'g',
      legende: 'Lipides',
    },
  }

  return (
    <Container>
      <Icone src={dico[donnees.compteur].icone} alt="" />
      <Valeurs>
        <Valeur>
          {donnees.valeur}
          {dico[donnees.compteur].unite}
        </Valeur>
        <Unite>{dico[donnees.compteur].legende}</Unite>
      </Valeurs>
    </Container>
  )
}

export default AverageCard
