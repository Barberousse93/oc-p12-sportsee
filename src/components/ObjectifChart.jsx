import React from 'react'
import styled from 'styled-components'
import { PieChart, Pie, Cell } from 'recharts'
import colors from '../utils/colors.jsx'

const Container = styled.div`
  // position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  width: 260px;
  height: 260px;
  // top: 350px;
  // left: 150px;
  background-color: ${colors.backGroundComponents};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  grid-column: 3;
  grid-row: 2;
`
const Legende = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 1;
`
const LegendeValeur = styled.h3`
  font-size: 26px;
  font-weight: 700;
  color= ${colors.textOnDark};
  
`
const LegendeText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.ligthText};
`
const Score = styled.h2`
  position: relative;
  top: -85px;
  left: -100px;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textOnClear};
`

function ObjectifChart(data) {
  const pieData = [{ value: data.score }]
  return (
    <Container>
      <Legende>
        <Score>Score</Score>
        <LegendeValeur>{data.score}%</LegendeValeur>
        <LegendeText>de votre objectif</LegendeText>
      </Legende>
      <PieChart width={260} height={260}>
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={90}
          startAngle={0}
          endAngle={370}
        >
          <Cell fill={'#fff'} />
        </Pie>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={100}
          // paddingAngle={0}
          startAngle={90}
          endAngle={(360 * data.score) / 100 + 90}
        >
          <Cell fill={colors.secondary} />
        </Pie>
      </PieChart>
    </Container>
  )
}

export default ObjectifChart
