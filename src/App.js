import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import WindowFrame from './components/Window.js'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


export default function App() {
  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <WindowFrame />
      </ThemeProvider>
  );
}
