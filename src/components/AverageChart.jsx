/* eslint-disable react/prop-types */
import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../utils/Hooks/index.jsx'
import Loader from '../utils/Loader.jsx'
import colors from '../utils/colors.jsx'
import styled from 'styled-components'
import { LineChart, XAxis, Tooltip, Line } from 'recharts'

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 260px;
  height: 260px;
  background-color: ${colors.backGroundComponents};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  grid-column: 1;
  grid-row: 2;
`

const Legende = styled.h3`
  position: absolute;
  width: 150px;
  margin: 15px;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textOnDark};
  opacity: 0.5;
  z-index: 1;
`
const CustomTooTip = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`
const CustomTooTipLabel = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${colors.textOnClear};
`
const transcriptionJour = {
  1: { jour: 'L' },
  2: { jour: 'M' },
  3: { jour: 'M' },
  4: { jour: 'J' },
  5: { jour: 'V' },
  6: { jour: 'S' },
  7: { jour: 'D' },
}

/**
 * 
 * @param {boolean} Mock  
 * @returns AverageChart
 */
function AverageChart({ Mock }) {
  const { ID } = useParams()
  const { data, isLoading, isError } = useFetch(
    Mock
      ? `http://localhost:3001/datas/average.json`
      : `http://localhost:3000/user/${ID}/average-sessions`
  )

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  if (!data) return

  const Datas =
    data && data.sessions ? JSON.parse(JSON.stringify(data.sessions)) : []

  Datas.map((item) => {
    item.day = transcriptionJour[item.day].jour
  })

  const ToolTipPerso = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooTip>
          <CustomTooTipLabel>{`${payload[0].payload.sessionLength}min`}</CustomTooTipLabel>
          {payload[0].payload.sessionLength === 0 ? (
            <CustomTooTipLabel>Ben alors ? Un oubli ??</CustomTooTipLabel>
          ) : null}
        </CustomTooTip>
      )
    }
    return null
  }

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Legende>Durée moyenne des sessions</Legende>
          <LineChart
            width={260}
            height={260}
            data={data.sessions}
            margin={{ top: 10, left: 10, right: 10 }}
            style={{ backgroundColor: '#F00', borderRadius: '5px' }}
          >
            <XAxis
              dataKey="day"
              tick={{ fill: '#FFF' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<ToolTipPerso />} />
            <Line
              dot={false}
              strokeWidth={3}
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
            />
          </LineChart>
        </>
      )}
    </Container>
  )
}

export default AverageChart
