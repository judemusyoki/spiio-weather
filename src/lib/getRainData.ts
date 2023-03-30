/**
 * lib function to extract rain data weather item data
 * @param weatherItem single record of weather chart data
 * @returns
 */
export const getRainData = (weatherItem) => {
  if (!weatherItem.rain) return 0

  const rainObj = weatherItem.rain
  const rainValues = Object.values(rainObj)[0] as number

  return rainValues
}
