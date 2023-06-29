/* eslint-disable react/prop-types */
import React from 'react'
import { useParams } from 'react-router'
import { getActivityInfos } from '../API/index.js'
import Loader from '../utils/Loader.jsx'
import colors from '../utils/colors.jsx'
import styled from 'styled-components'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 90%;
  height: 320px;
  background-color: ${colors.backGroundComponents};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  grid-column: 1/4;
  grid-row: 1;
`
const Legende = styled.h3`
  position: absolute;
  width: 150px;
  margin: 15px;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textOnClear};
`
const CustomTooTip = styled.div`
  background-color: ${colors.secondary};
  padding: 10px;
  border-radius: 5px;
`
const CustomTooTipLabel = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${colors.textOnDark};
`
const Date = styled.p`
  font-size: 12px;
  font-weight: 700;
  font-style: italic;
  color: ${colors.textOnDark};
`
/**
 * tooltip personnalisé - RECHARTS
 * @param {{active: boolean , payload: object }}
 * @returns CustomTooTip
 */
const TooltipPerso = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooTip>
        <Date>{payload[0].payload.date}</Date>
        <CustomTooTipLabel>{`${payload[0].payload.kilogram} Kg`}</CustomTooTipLabel>
        <CustomTooTipLabel>{`${payload[1].payload.calories} Kcal`}</CustomTooTipLabel>
      </CustomTooTip>
    )
  }
  return null
}

/**
 * Légende personnalisée - RECHARTS
 * @param {{payload: object}} props
 * @returns
 */
const LegendPerso = (props) => {
  const dico = {
    kilogram: { value: 'Poids (kg)', color: colors.primary },
    calories: { value: 'Calories brulées (kCal)', color: colors.secondary },
  }

  const couleur = {
    0: { value: colors.primary },
    1: { value: colors.secondary },
  }

  const { payload } = props

  return (
    <ul
      className="recharts-default-legend"
      style={{ padding: 0, margin: 0, textAlign: 'right' }}
    >
      {payload.map((legende, index) => (
        <li
          key={index}
          className={`recharts-legend-item legend-item-${index}`}
          style={{ display: 'inline-block', marginRight: 10 }}
        >
          <svg
            className="recharts-surface"
            width="10"
            height="10"
            viewBox="0 0 32 32"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: 4,
            }}
          >
            <title></title>
            <desc></desc>
            <path
              fill={couleur[index].value}
              // fill="blue"
              cx="16"
              cy="16"
              className="recharts-symbols"
              transform="translate(16, 16)"
              d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
            ></path>
          </svg>
          <span
            className="recharts-legend-item-text"
            style={{ color: colors.textOnClear }}
          >
            {dico[legende.dataKey].value}
          </span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Graphiques des activités : poids et calories brulées
 * @param {boolean} Mock origine des données : false : Backend ; true : données mockées
 * @returns ActivityChart
 */

function ActivityChart({ Mock }) {
  const { ID } = useParams()
  const { data, isLoading, isError } = getActivityInfos(Mock, ID)

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  if (!data) return

  const Datas =
    data && data.sessions ? JSON.parse(JSON.stringify(data.sessions)) : []

  Datas.map((item, index) => {
    item.date = item.day
    item.day = index + 1
  })

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Legende>Activité quotidienne</Legende>
          <BarChart
            width={840}
            height={320}
            data={Datas}
            margin={{
              top: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" orientation="left" stroke={colors.primary} />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke={colors.secondary}
            />
            <Tooltip content={<TooltipPerso />} />
            <Legend content={<LegendPerso />} verticalAlign="top" height={30} />
            <Bar
              yAxisId="left"
              dataKey="kilogram"
              fill={colors.primary}
              maxBarSize={10}
            />
            <Bar
              yAxisId="right"
              dataKey="calories"
              fill={colors.secondary}
              maxBarSize={10}
            />
          </BarChart>
        </>
      )}
    </Container>
  )
}

export default ActivityChart
