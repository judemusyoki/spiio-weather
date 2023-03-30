export type WeatherData = {
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  name: string
  dt: number
}

export type WeatherChartData = {
  date: string
  temp: number
  maxTemp: number
  minTemp: number
  rain: number
}

export type Coordinates = {
  lat: string
  lon: string
}
