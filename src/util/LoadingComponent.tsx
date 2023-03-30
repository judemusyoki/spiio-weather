import React from 'react'

import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export const LoadingComponent = () => {
  return (
    <Box sx={loaderContainer}>
      <CircularProgress color="success" />
    </Box>
  )
}

const loaderContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}
