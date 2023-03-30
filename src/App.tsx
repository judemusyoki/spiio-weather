/* eslint-disable @typescript-eslint/ban-ts-comment */
import { WeatherChartData } from 'types'
import { LoadingComponent } from 'util/LoadingComponent'

import React, { useEffect, useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'

import { Search, WeatherChart } from './components'
import { Item } from './components/styled/styledItem'
import { Layout } from './layout'
import { useWeatherData } from './lib'

function App() {
  const [latitude, setLatitude] = useState('56.1456096')
  const [longitude, setLongitude] = useState('10.1923257')
  const [city, setCity] = useState('No City Selected')
  const [forecast, setForecast] = useState<WeatherChartData[]>([])
  const [fetching, setFetching] = useState<boolean>(true)

  const { loading, data } = useWeatherData({
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

    setCity(searchData.label)
    setLatitude(lat)
    setLongitude(lon)
  }

  if (fetching) return <LoadingComponent />

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Stack
          gap={0.5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
          spacing={2}
        >
          <Item sx={{ width: '300px' }}>
            <Search onSearchChange={handleSearchChange} />
          </Item>
          <Item
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '300px',
              backgroundColor: (theme) => theme.palette.purple.dark,
            }}
          >
            <Typography
              fontWeight={400}
              color={(theme) => theme.palette.textColor.light}
            >
              Selected City:
            </Typography>
            <Typography
              sx={{ marginLeft: '10px' }}
              fontWeight={500}
              color={(theme) => theme.palette.textColor.light}
            >
              {city}
            </Typography>
          </Item>
        </Stack>
      </Box>

      {forecast ? <WeatherChart data={forecast} /> : <Box>No Data</Box>}
    </Layout>
  )
}

export default App
