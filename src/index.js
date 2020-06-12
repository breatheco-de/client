import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import Layout from './common/layout';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}><Layout /></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
