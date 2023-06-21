import React from 'react'
import { useParams } from 'react-router'
import Loader from '../utils/Loader.jsx'
import { useFetch } from '../utils/Hooks/index.jsx'
import styled from 'styled-components'
import colors from '../utils/colors.jsx'
import AverageCard from '../components/AverageCard.jsx'
import ObjectifChart from '../components/ObjectifChart.jsx'
import RadarChart from '../components/RadarChart.jsx'
import AverageChart from '../components/AverageChart.jsx'
import ActivityChart from '../components/ActivityChart.jsx'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(1024px - 91px);
`
const DashBoard = styled.div`
  position: relative;
  width: calc(100% - 171px);
  height: 775px;
  top: 100px;
  right: -171px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

const StyledH1 = styled.h1`
  position: relative;
  width: 100%;
  top: 50px;
  left: 150px;
  font-size: 48px;
  font-weight: 500;
  color: ${colors.primary};
`
const StyledFirstName = styled.span`
  color: ${colors.secondary};
`
const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  grid-column: 4;
  grid-row: 1/3;
`
const StyledLI = styled.li`
  list-style: none;
`

function Resultats() {
  const { ID } = useParams()

  const { data, isLoading, isError } = useFetch(
    `http://localhost:3000/user/${ID}`
  )

  if (isError) {
    return <h1>Oups !! Il y a eu un problème...</h1>
  }

  const compteur = data.keyData
  const todayScore = data.todayScore ? data.todayScore * 100 : data.score * 100

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledH1>
            Bonjour
            <StyledFirstName> {data.userInfos.firstName}</StyledFirstName>
          </StyledH1>
          <DashBoard>
            <StyledUL>
              {Object.entries(compteur).map(([label, valeur], index) => (
                <StyledLI key={index}>
                  <AverageCard compteur={label} valeur={valeur}></AverageCard>
                </StyledLI>
              ))}
            </StyledUL>
            <ObjectifChart score={todayScore} />
            <RadarChart />
            <AverageChart />
            <ActivityChart />
          </DashBoard>
        </>
      )}
    </Container>
  )
}

export default Resultats
