import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (response.status !== 200) {
          setError(true)
        } else {
          const data = await response.json()
          setData(data.data)
        }
      } catch (err) {
        console.log('error', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)

    fetchData()
  }, [url])

  return { data, isLoading, isError }
}
