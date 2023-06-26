import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../utils/Hooks/index.jsx'
import Loader from '../utils/Loader.jsx'
import { PolarGrid, RadarChart, PolarAngleAxis, Radar } from 'recharts'
import colors from '../utils/colors.jsx'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 260px;
  height: 260px;
  background-color: ${colors.backGroundComponents};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  grid-column: 2;
  grid-row: 2;
`
const dicoAnglaisFrancais = {
  1: { categorie: 'Cardio' },
  2: { categorie: 'Energie' },
  3: { categorie: 'Endurance' },
  4: { categorie: 'Force' },
  5: { categorie: 'Vitesse' },
  6: { categorie: 'Intensité' },
}

/**
 * Graphique radar - RECHARTS
 * @param {boolean} Mock 
 * @returns compRadarChart
 */
function compRadarChart({ Mock }) {
  const { ID } = useParams()
  const { data, isLoading, isError } = useFetch(
    Mock
      ? `http://localhost:3001/datas/performance.json`
      : `http://localhost:3000/user/${ID}/performance`
  )

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  if (!data) return

  const ActivityData =
    data && data.data ? JSON.parse(JSON.stringify(data.data)) : []

  ActivityData.map((item) => {
    item.kind = dicoAnglaisFrancais[item.kind].categorie
  })

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <RadarChart
            outerRadius={80}
            width={260}
            height={260}
            cx={'48%'} // ????
            data={ActivityData}
            style={{
              color: '#000',
              backgroundColor: colors.textOnClear,
              borderRadius: '5px',
            }}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fontSize: '12px', fontWeigth: 500, fill: '#FFF' }}
            />
            <Radar
              name="Performance"
              dataKey="value"
              fillOpacity={0.7}
              style={{
                fill: colors.secondary,
                stroke: colors.primary,
              }}
              margin={{ left: 5, right: 5 }}
            />
          </RadarChart>
        </div>
      )}
    </Container>
  )
}

export default compRadarChart
