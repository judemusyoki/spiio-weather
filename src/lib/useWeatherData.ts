/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from 'react'
import axios from 'axios'

export type Coordinates = {
  lat: string
  lon: string
}

type WeatherData = {
  data: any
}

type WeatherHook = {
  loading: boolean
  error: string | null
  data: any | null
}

export const useWeatherData = ({ lat, lon }: Coordinates): WeatherHook => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const units = 'metric'

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_OPEN_WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        )
        setData(response.data.list)
      } catch (error) {
        //@ts-ignore
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apiKey, lat, lon])

  return { loading, error, data }
}
