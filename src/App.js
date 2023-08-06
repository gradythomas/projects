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
        <head>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"
            rel="stylesheet"
        />
        </head>
        <WindowFrame />
      </ThemeProvider>
  );
}
