import { useFetch } from '../utils/Hooks'
import { UserInfos } from '../Modele/UserInfo'
import { ActivityInfo } from '../Modele/ActivityInfo'
import { AverageSessions } from '../Modele/AverageSessions'
import { performancesInfos } from '../Modele/performancesInfos'

export function getUserInfos(Mock, ID) {
  const { data, isLoading, isError } = useFetch(
    Mock
      ? `http://localhost:3001/datas/user.json`
      : `http://localhost:3000/user/${ID}`
  )
  const user = new UserInfos(data)
  return { data: user, isLoading, isError }
}

export function getActivityInfos(Mock, ID) {
  const { data, isLoading, isError } = useFetch(
    Mock
      ? 'http://localhost:3001/datas/activity.json'
      : `http://localhost:3000/user/${ID}/activity`
  )
  const activity = new ActivityInfo(data)
  return { data: activity, isLoading, isError }
}


export function getAverageSessions(Mock,ID){
  const { data, isLoading, isError } = useFetch(
    Mock
      ? `http://localhost:3001/datas/average.json`
      : `http://localhost:3000/user/${ID}/average-sessions`
  )
  const average = new AverageSessions(data)
  return{data:average, isLoading, isError}
}

export function getPerformances(Mock,ID){
  const { data, isLoading, isError } = useFetch(
    Mock
      ? `http://localhost:3001/datas/performance.json`
      : `http://localhost:3000/user/${ID}/performance`
  )
  const perfomances = new performancesInfos(data)
  return {data:perfomances, isLoading, isError}
}