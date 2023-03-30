import { format } from 'date-fns'

import { getRainData } from './getRainData'

/**
 * filter weather data to preapre for echart use
 * @param data weather data fetched from openweatherapi
 * @returns object containing data for echart
 */
export const filterChartData = (data) => {
  const filteredChartData = data?.map((weatherItem) => {
    const itemDate = new Date(weatherItem.dt * 1000)
    const dayAbbreviation: string = format(itemDate, 'EEE')
    const rain = getRainData(weatherItem)

    return {
      date: dayAbbreviation,
      temperature: weatherItem.main.temp,
      maxTemp: weatherItem.main.temp_max,
      minTemp: weatherItem.main.temp_min,
      rain: rain,
    }
  })

  return filteredChartData
}
