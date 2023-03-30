# A simple 5 day weather forecast app
This is a simple app to use echart to a weather forcast sing the [openweatherapi](https://openweathermap.org/)

##Techologies
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [echarts](https://echarts.apache.org/handbook/en/get-started/)
- [rapidapi](https://rapidapi.com)
- [GeoDBA-api](https://rapidapi.com//wirefreethought/api/geodb-cities/pricing)
- [Material-UI](https://mui.com/)
- [openweatherapi](https://openweathermap.org/)

## Getting Started

To get started with the app, you can follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/judemusyoki/spiio-weather.git
```
2. Install the dependencies:
```
cd spiio-weather
yarn install
```
3. Create a .env.local file at the root of the project with your API credentials:
```
REACT_APP_OPENWEATHERMAP_API_KEY
REACT_APP_OPEN_WEATHER_BASE_URL
REACT_APP_GEO_API_URL
REACT_APP_RAPID_API_KEY
REACT_APP_RAPID_API_HOST
```
4. Start the development server:
```
yarn dev
```
5. Open ```http://localhost:3000``` in your browser to view the app.

## Features
The app allows you to:

- Search for 5 weather(rain, highest & lowest temperatures) in Celcius
- View the weather forecast data in charts 
- View & analyze data in different types of charts
- Download data reports from charts
