import React from "react"
import { navigate } from "@reach/router"
import { Button, Grid, Flex, Box, NavLink, Label } from 'theme-ui'
import Icon from '../icon'

const MenuNav = ({ icon, label, to }) => <NavLink onClick={() => navigate(to)} p={3}
    sx={{ '&:hover': {
        bg: 'light'
    }}}
>
    <Flex><Box mr={3}><Icon name={icon} /></Box><Label sx={{ width: '100%',  cursor: 'pointer' }}>{label}</Label></Flex>
</NavLink>

const Menu = () => <Grid gap={2} columns={[ 1, 3 ]}>
    <Box sx={{ display: ['none', 'flex'] }} p={3}>Box</Box>
    <Flex as='nav'>
        <MenuNav icon="home" label="Home" to="/dashboard" />
        <MenuNav icon="collaboration" label="Community" to="/community" />
        <MenuNav icon="academy" label="Academy" to="/courses" />
    </Flex>
    <Box sx={{ display: ['none', 'flex'] }}>
        <Label width="100%"/>
        <Button mr="1"
            onClick={() => navigate('/settings')}
            sx={{ 
                bg: 'background',
                cursor: 'pointer',
                '&:hover': {
                    bg: 'light'
                }
            }}
        ><Icon name="settings" /></Button>
    </Box>
</Grid>
export default Menu