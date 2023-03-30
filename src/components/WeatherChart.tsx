import * as echarts from 'echarts'
import { WeatherData } from 'lib'

import React, { FC, useRef } from 'react'

import { theme } from '../theme'
import { Item } from './styled/styledItem'

type WeatherChartProps = {
  data: WeatherData[]
}

export const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  if (chartRef.current && data) {
    const chart = echarts.init(chartRef.current)
    const temperatures = data.map((d) => d.temperature)
    const rain = data.map((d) => d.rain)

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
        data: Array.from(new Set(data.map((d) => d.date))),
      },
      yAxis: [
        {
          type: 'value',
          min: Math.floor(minTemperature),
          max: Math.ceil(maxTemperature) + 7,
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
          data: data.map((d) => d.maxTemp),
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
          data: data.map((d) => d.minTemp),
          type: 'line',
        },
        {
          name: 'Rain',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series',
          },
          data: data.map((d) => d.rain),
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
          minHeight: 400,
          backgroundColor: theme.palette.background.paper,
          overflow: 'hidden',
        }}
      />
    </Item>
  )
}
