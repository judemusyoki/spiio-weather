import React from 'react'

export const getWeatherIcon = (weatherCode: number) => {
  switch (weatherCode) {
    case 800:
      return <i className="wi wi-day-sunny"></i>
    case 801:
      return <i className="wi wi-day-cloudy"></i>
    case 802:
      return <i className="wi wi-cloud"></i>
    case 803:
    case 804:
      return <i className="wi wi-cloudy"></i>
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return <i className="wi wi-showers"></i>
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      return <i className="wi wi-rain"></i>
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return <i className="wi wi-thunderstorm"></i>
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <i className="wi wi-snow"></i>
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return <i className="wi wi-fog"></i>
    default:
      return null
  }
}

const TooltipContent = (props: any) => {
  const { payload, label, active } = props
  console.log('PAYLOAD..', props)
  if (active) {
    const weatherIcon = getWeatherIcon(payload[0]?.value)
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0]?.value} °C`}</p>
        <p className="weather">
          {weatherIcon} {payload[0]?.payload.weatherDescription}
        </p>
      </div>
    )
  }

  return null
}

export default TooltipContent
