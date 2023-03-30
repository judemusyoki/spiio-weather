import React from 'react'

import { Typography } from '@mui/material'

import { Item } from '../components/styled/styledItem'

export const Header = () => {
  return (
    <Item
      sx={{
        mt: '10px',
        mb: '30px',
        backgroundColor: (theme) => theme.palette.purple.dark,
      }}
    >
      <Typography
        fontSize={25}
        fontWeight={700}
        color={(theme) => theme.palette.textColor.light}
      >
        5 Day Weather Forecast
      </Typography>
    </Item>
  )
}
