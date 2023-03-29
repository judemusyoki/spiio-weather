/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { GEO_API_OPTIONS, useWeatherData } from './lib'
import { Search, WeatherChart } from './components'
import { Box } from '@mui/material'

function App() {
  const [latitude, setLatitude] = useState('56.1456096')
  const [longitude, setLongitude] = useState('10.1923257')
  const [forecast, setForecast] = useState<any>([])
  const [fetching, setFetching] = useState<boolean>(true)

  const { loading, error, data } = useWeatherData({
    lat: latitude,
    lon: longitude,
  })

  useEffect(() => {
    setFetching(loading)
  }, [loading])

  useEffect(() => {
    if (data) {
      setForecast(data)
    }
  }, [data])

  const handleSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    setLatitude(lat)
    setLongitude(lon)
  }

  if (fetching) return <Box>Loading..</Box>

  return (
    <Box className="container">
      <h1> Weather Forecast </h1>

      <Search onSearchChange={handleSearchChange} />

      {forecast ? <WeatherChart data={forecast} /> : <Box>No Data</Box>}
    </Box>
  )
}

export default App
