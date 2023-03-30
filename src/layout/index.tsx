import React from 'react'

import { Box, ThemeProvider } from '@mui/material'

import { theme } from '../theme'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="container"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: '0px 50px 10px 50px',
        }}
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
