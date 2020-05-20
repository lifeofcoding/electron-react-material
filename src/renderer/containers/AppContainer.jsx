import React, { useMemo } from 'react'

import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'

import App from '../components/App'
import { useDarkColors } from '../hooks/themeHooks'

function AppContainer () {
  const isDarkMode = useDarkColors()
  const theme = useMemo(() => createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light'
    }
  }), [isDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

export default AppContainer
