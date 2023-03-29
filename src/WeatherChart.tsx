import React, { FC, useRef } from 'react'
import * as echarts from 'echarts'
import { format } from 'date-fns'

type WeatherChartProps = {
  // weatherData: { date: Date; temperature: number }[]
  data: any[]
}

const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null)

  const filteredData = data?.map((weatherItem) => {
    const itemDate = new Date(weatherItem.dt * 1000)
    const dayAbbreviation: string = format(itemDate, 'EEE')
    return {
      date: dayAbbreviation,
      temperature: weatherItem.main.temp,
    }
  })

  if (chartRef.current && filteredData) {
    const chart = echarts.init(chartRef.current)
    const temperatures = filteredData.map((d) => d.temperature)

    const minTemperature = Math.min(...temperatures)
    const maxTemperature = Math.max(...temperatures)
    const options = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Average Temp'],
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
      yAxis: {
        type: 'value',
        min: Math.floor(minTemperature),
        max: Math.ceil(maxTemperature),
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      series: [
        {
          name: 'Average Temp',
          data: filteredData.map((d) => d.temperature),
          type: 'line',
        },
      ],
    }
    chart.setOption(options)
  }

  return (
    <>
      <div ref={chartRef} style={{ width: '100%', height: 400 }} />
    </>
  )
}

export default WeatherChart
