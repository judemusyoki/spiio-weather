import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    purple: {
      light: string
      dark: string
    }
    textColor: {
      primary: string
      secondary: string
    }
  }
  interface PaletteOptions {
    purple: {
      light: string
      dark: string
    }
    textColor: {
      primary: string
      secondary: string
    }
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    purple: {
      light: '#CFC8FF',
      dark: '#475BE8',
    },
    textColor: {
      primary: '#11142D',
      secondary: '#808191',
    },
    background: {
      default: '#E5E5E5',
      paper: '#FCFCFC',
    },

    primary: {
      main: '#475BE8',
      contrastText: '#FCFCFC',
    },
    // Greyish background between element groups
    secondary: {
      main: '#11142D',
      contrastText: '#11142D',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
})

export { theme }
