import React, { FC, useRef } from 'react'
import * as echarts from 'echarts'
import { format } from 'date-fns'
import { Item } from './styled/styledItem'
import { Box, Paper } from '@mui/material'
import { theme } from '../theme'

type WeatherChartProps = {
  // weatherData: { date: Date; temperature: number }[]
  data: any[]
}

const getRain = (weatherItem) => {
  if (!weatherItem.rain) return 0
  const rainObj = weatherItem.rain
  const rainValues = Object.values(rainObj)[0]
  return rainValues
}

export const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  const filteredData = data?.map((weatherItem) => {
    const itemDate = new Date(weatherItem.dt * 1000)
    const dayAbbreviation: string = format(itemDate, 'EEE')
    const rain = getRain(weatherItem)

    return {
      date: dayAbbreviation,
      temperature: weatherItem.main.temp,
      maxTemp: weatherItem.main.temp_max,
      minTemp: weatherItem.main.temp_min,
      rain: rain,
    }
  })

  if (chartRef.current && filteredData) {
    const chart = echarts.init(chartRef.current)
    const temperatures = filteredData.map((d) => d.temperature)
    const rain = filteredData.map((d) => d.rain) as any[]

    const minTemperature = Math.min(...temperatures)
    const maxTemperature = Math.max(...temperatures)
    const maxRain = Math.max(...rain)
    const options = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Highest Temp', 'Lowest Temp', 'Rain'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        data: Array.from(new Set(filteredData.map((d) => d.date))),
      },
      yAxis: [
        {
          type: 'value',
          min: Math.floor(minTemperature),
          max: Math.ceil(maxTemperature),
          axisLabel: {
            formatter: '{value} °C',
          },
        },
        {
          type: 'value',
          name: 'Rain',
          min: 0,
          max: Math.ceil(maxRain),
          axisLabel: {
            formatter: '{value} mm',
          },
        },
      ],
      series: [
        {
          name: 'Highest Temp',
          data: filteredData.map((d) => d.maxTemp),
          type: 'line',
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          name: 'Lowest Temp',
          data: filteredData.map((d) => d.minTemp),
          type: 'line',
        },
        {
          name: 'Rain',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series',
          },
          data: filteredData.map((d) => d.rain),
          yAxisIndex: 1,
        },
      ],
    }
    chart.setOption(options)
  }

  return (
    <Item
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 2,
        mt: 3,
      }}
    >
      <div
        ref={chartRef}
        style={{
          width: '100%',
          height: 400,
          backgroundColor: theme.palette.background.paper,
          overflow: 'hidden',
        }}
      />
    </Item>
  )
}
