import React from 'react';
import ReactDOM from 'react-dom';
import packg from '../package.json';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import { toTheme } from '@theme-ui/typography'
import Layout from './common/layout';
import { autoLogin } from './common/actions.js';
import * as queryString from 'query-string'

const Config = () => <React.StrictMode><ThemeProvider theme={theme}><Layout /></ThemeProvider></React.StrictMode>

console.info(`BreatheCode v${packg.version}, ENV=${process.env.REACT_APP_ENVIRONMENT}`);

const app = document.querySelector('#root');
let query = queryString.parse(window.location.search);

//if token comes in the URL we have to login with that token;
if(typeof query.token != 'undefined') 
    autoLogin(query.token)
        .then(() => { ReactDOM.render(<Config />,app); })
        .catch(() => { ReactDOM.render(<h1>Invalid Credentials</h1>,app); });

//else normal rendering
else ReactDOM.render(<Config />,app);
