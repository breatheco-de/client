import React from "react"
import { Link } from "@reach/router"
import { Navbar, Image, Nav } from "react-bootstrap"
import Icon from '../icon'
import logoURL from '../../assets/logo.png'

const TopLink = ({ to, icon }) => <Nav.Item className="px-3">
    <Link to={to}>
        <Nav.Link href={`#${to}`}><Icon name={icon} size='lg' /></Nav.Link>
    </Link>
</Nav.Item>

const Menu = () => <Navbar>
    <Navbar.Brand href="#home"><Image src={logoURL} rounded /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
        <Nav variant="pills" className="w-100 justify-content-center">
            <TopLink to="home" icon="home" />
            <TopLink to="features" icon="collaboration" />
            <TopLink to="pricing" icon="academy" />
        </Nav>
        <Nav className="ml-auto">
            <TopLink to="settings" icon="settings" />
        </Nav>
    </Navbar.Collapse>
    </Navbar>
export default Menu