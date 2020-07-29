import React from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from "@reach/router"
import Icon from '../icon'

const LeftNavLink = ({ to, icon }) => <Link to={to} className="d-flex"><Icon name={icon} size='lg' /></Link>
const Menu = ({ children }) => <>
    <Row>
        <Col>
            <LeftNavLink icon="profile" label="Profile" to="/settings/profile" />
            <LeftNavLink icon="briefcase" label="Career" to="/settings/career" />
            <LeftNavLink icon="academy" label="Academy" to="/courses" />
        </Col>
        <Col>{children}</Col>
    </Row>
</>
export default Menu