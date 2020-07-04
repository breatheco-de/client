import React from "react"
import { navigate } from "@reach/router"
import { Container, Grid, Flex, Box, NavLink, Label } from 'theme-ui'
import Icon from '../icon'
import LeftNavLink from './leftnavlink'

const Menu = ({ children }) => <Flex columns={[ 2 ]} sx={{ width: [ "100%", "100%", "1000px" ], margin: "auto" }}>
    <Flex sx={{
        flexDirection: 'column',
        width: "200px",
    }} >
        <LeftNavLink icon="profile" label="Profile" to="/settings/profile" />
        <LeftNavLink icon="briefcase" label="Career" to="/settings/career" />
        <LeftNavLink icon="academy" label="Academy" to="/courses" />
    </Flex>
    <Container>
        {children}
    </Container>
</Flex>
export default Menu