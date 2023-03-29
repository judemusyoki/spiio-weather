/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_OPTIONS } from '../lib'

type SearchProps = {
  onSearchChange: (data: any) => void
}

export const Search = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${process.env.REACT_APP_GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      GEO_API_OPTIONS,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data?.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}
