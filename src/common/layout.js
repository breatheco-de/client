import React from "react"
import { Router } from "@reach/router"
import loadable from '@loadable/component'
import Menu from "../components/menu/menu"

const Home = loadable(() => import('../views/home'))
const Login = loadable(() => import('../views/login'))

const Layout = () => <div>
    <Menu />
    <Router>
        <Home path="/" />
        <Login path="/login" />
    </Router>
</div>
export default Layout