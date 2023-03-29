export const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_HOST}`,
  },
}
