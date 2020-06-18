import React from "react"
import { Router, Redirect } from "@reach/router"
import loadable from '@loadable/component'
import Menu from "../components/menu/top"

const Home = loadable(() => import('../views/home'))
const Login = loadable(() => import('../views/login'))
const SettingsMenu = loadable(() => import('../components/menu/settings'))
const CareerSettings = loadable(() => import('../views/settings/career'))
const ProfileSettings = loadable(() => import('../views/settings/profile'))

const NavbarLayout = ({children}) => <div>
    <Menu />
    {children}
</div>

const NotFound = () => <p>Sorry, nothing here</p>

const Layout = () => <div>
    <Router>
        <Redirect from="/" to="login" />
        <Login path="/login" />
        <NavbarLayout path="/">
            <Home path="/dashboard" />
            <SettingsMenu path="settings">
                <ProfileSettings path="profile" />
                <CareerSettings path="career" />
            </SettingsMenu>
        </NavbarLayout>
        <NotFound default />
    </Router>
</div>
export default Layout