import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, IconButton, Typography } from '@mui/material'

import { Item } from '../components/styled/styledItem'

export const Footer = () => {
  return (
    <Item
      sx={{
        mt: '10px',
        mb: '30px',
        backgroundColor: (theme) => theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-end',
      }}
    >
      <Typography
        fontSize={15}
        fontWeight={700}
        sx={{ mt: 'auto', mb: 'auto' }}
        color={(theme) => theme.palette.textColor.primary}
      >
        Copyright © {new Date().getFullYear()}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          fontSize={15}
          sx={{ mt: 'auto', mb: 'auto' }}
          color={(theme) => theme.palette.textColor.primary}
        >
          Check out my GitHub
        </Typography>
        <a
          href="https://github.com/judemusyoki"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton sx={{ mb: '5px' }} aria-label="delete">
            <GitHubIcon sx={{ color: (theme) => theme.palette.purple.dark }} />
          </IconButton>
        </a>
      </Box>

      {/* <Button
        variant="outlined"
        component={Link}
        href="https://github.com/judemusyoki"
        target="_blank"
        rel="noreferrer noopener"
      >
        Check out my GitHub
      </Button> */}
    </Item>
  )
}
