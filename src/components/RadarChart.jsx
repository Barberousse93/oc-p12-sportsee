import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../utils/Hooks/index.jsx'
import Loader from '../utils/Loader.jsx'
import {
  PolarGrid,
  RadarChart,
  // PolarRadiusAxis,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from 'recharts'

const dicoAnglaisFrancais = {
  1: { categorie: 'Cardio' },
  2: { categorie: 'Energie' },
  3: { categorie: 'Endurance' },
  4: { categorie: 'Force' },
  5: { categorie: 'Vitesse' },
  6: { categorie: 'Intensité' },
}

function compRadarChart() {
  const { ID } = useParams()
  const { data, isLoading, isError } = useFetch(
    `http://localhost:3000/user/${ID}/performance`
  )

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  const ActivityData = { ...data.data }

  Object.entries(ActivityData).map((item, index) => {
    item[1].kind = dicoAnglaisFrancais[index + 1].categorie
  })

  // console.log('ActivityData', ActivityData)

  let RadarData = []
  Object.entries(ActivityData).map((item) => {
    // console.log('item', item)
    RadarData.push(item[1])
    // console.log('RadarData', RadarData)
    return RadarData
  })

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RadarChart
            outerRadius={90}
            width={260}
            height={260}
            data={RadarData}
            style={{
              color: '#000',
              backgroundColor: '#F00',
              borderRadius: '5px',
            }}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              style={{ fontSize: '10px', color: '#FFF' }}
            />
            {/* <PolarRadiusAxis angle={30} domain={[0, 200]} /> */}
            <Radar
              name="Valeur"
              dataKey="value"
              stroke="#green"
              fillOpacity={0.6}
              style={{ fontSize: 12, fontWeight: 'bold', fill: 'blue' }}
            />
            <Tooltip />
          </RadarChart>
        </>
      )}
    </div>
  )
}

export default compRadarChart
