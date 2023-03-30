/* eslint-disable @typescript-eslint/ban-ts-comment */
import { filterChartData } from 'lib'
import { Coordinates, WeatherChartData, WeatherData } from 'types'

import { useState, useEffect } from 'react'

import axios from 'axios'

type WeatherHook = {
  loading: boolean
  error: string | null
  data: WeatherChartData[]
}

/**
 * hook using latitude & longitude to fetch weather data from openweatherapi
 * @param lat latitude
 * @param lon longitude
 * @returns weather forecast data
 */
export const useWeatherData = ({ lat, lon }: Coordinates): WeatherHook => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const units = 'metric'

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<WeatherChartData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_OPEN_WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        )
        const dataList: WeatherData[] = await response.data.list

        const filteredData = filterChartData(dataList)
        setData(filteredData)
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
