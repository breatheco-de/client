import React from 'react';
import ReactDOM from 'react-dom';
import packg from '../package.json';
import './styles.scss';
import Layout from './common/layout';
import { autoLogin } from './common/actions.js';
import * as queryString from 'query-string'
import { Session } from 'bc-react-session'

const Config = () => <Layout />

console.info(`BreatheCode v${packg.version}, ENV=${process.env.REACT_APP_ENVIRONMENT}`);

const app = document.querySelector('#root');
let query = queryString.parse(window.location.search);

//if token comes in the URL we have to login with that token;
console.log("Query", query)
if(query && Object.keys(query).length > 0 && typeof query.token != 'undefined'){
    autoLogin(query.token)
        .then(() => { ReactDOM.render(<Config />,app); })
        .catch(() => { ReactDOM.render(<h1>Invalid Credentials, <a href="/login">click here to login</a></h1>,app); });
}
else{
    const session = Session.get('breathecode-session');
    if((!session || session.isValid !== true) && !window.location.pathname.includes("login")){
        window.location = "/login";
    }
    else ReactDOM.render(<Config />,app);
}