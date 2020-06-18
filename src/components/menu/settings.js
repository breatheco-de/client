import React from "react"
import { navigate } from "@reach/router"
import { Container, Grid, Flex, Box, NavLink, Label } from 'theme-ui'
import Icon from '../icon'

const MenuNav = ({ icon, label, to }) => <NavLink onClick={() => navigate(to)} p={1}
    sx={{ '&:hover': {
        bg: 'light'
    }}}
>
    <Flex><Box mr={3}><Icon name={icon} /></Box><Label sx={{ width: '100%',  cursor: 'pointer' }}>{label}</Label></Flex>
</NavLink>

const Menu = ({ children }) => <Flex columns={[ 2 ]}>
    <Grid columns={[ 1 ]}>
        <MenuNav icon="home" label="Home" to="/dashboard" />
        <MenuNav icon="collaboration" label="Community" to="/community" />
        <MenuNav icon="academy" label="Academy" to="/courses" />
    </Grid>
    <Container>
        {children}
    </Container>
</Flex>
export default Menu