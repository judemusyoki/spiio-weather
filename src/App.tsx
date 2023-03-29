/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react'
import { useWeatherData } from './lib'
import { Search, WeatherChart } from './components'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import { Item } from './components/styled/styledItem'

function App() {
  const [latitude, setLatitude] = useState('56.1456096')
  const [longitude, setLongitude] = useState('10.1923257')
  const [city, setCity] = useState('No City Selected')
  const [forecast, setForecast] = useState<any>([])
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

  if (fetching) return <Box>Loading..</Box>

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="container"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: '0px 50px 10px 50px',
        }}
      >
        <Item sx={{ mb: '30px' }}>
          <Typography
            fontSize={25}
            fontWeight={700}
            color={(theme) => theme.palette.textColor.primary}
          >
            5 Day Weather Forecast
          </Typography>
        </Item>

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
            <Item sx={{ width: '250px' }}>
              <Search onSearchChange={handleSearchChange} />
            </Item>
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '250px',
              }}
            >
              <Typography
                fontWeight={400}
                color={(theme) => theme.palette.textColor.secondary}
              >
                Selected City:
              </Typography>
              <Typography
                fontWeight={500}
                color={(theme) => theme.palette.textColor.primary}
              >
                {city}
              </Typography>
            </Item>
          </Stack>
        </Box>

        {forecast ? <WeatherChart data={forecast} /> : <Box>No Data</Box>}
      </Box>
    </ThemeProvider>
  )
}

export default App
