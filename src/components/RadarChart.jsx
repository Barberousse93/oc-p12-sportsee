import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../utils/Hooks/index.jsx'

const dicoAnglaisFrancais = {
  1: { categorie: 'Cardio' },
  2: { categorie: 'Energie' },
  3: { categorie: 'Endurance' },
  4: { categorie: 'Force' },
  5: { categorie: 'Vitesse' },
  6: { categorie: 'Intensité' },
}

function RadarChart() {
  const { ID } = useParams()
  const { data, isLoading, isError } = useFetch(
    `http://localhost:3000/user/${ID}/performance`
  )

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  // console.log('data', data)

  const ActivityData = { ...data.data }
  console.log('ActivityData', ActivityData)

  Object.entries(ActivityData).map((item) => {
    console.log('Avant : ', item[1].kind, item[1].value)
    item[1].kind = dicoAnglaisFrancais[item[1].kind].categorie
    console.log('Après : ', item[1].kind, item[1].value)
  })

  console.log('ActivityData', ActivityData)

  return (
    <div>
      {isLoading}
      {/* {RadarData[0].kind} */}
    </div>
  )
}

export default RadarChart
