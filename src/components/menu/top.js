import React from "react"
import { navigate, Link } from "@reach/router"
import { Button, Grid, Flex, Box, Label, Image } from 'theme-ui'
import Icon from '../icon'
import logoURL from '../../assets/logo.png'

const Menu = () => <Grid gap={2} columns={[ 1, 3 ]}>
    <Box sx={{ display: ['none', 'flex'] }} p={2}>
        <Image
            sx={{
                width: '30px',
                height: '30px',
            }}
            src={logoURL}
            variant='avatar'
        />
    </Box>
    <Flex as='nav'>
        <TopNavLink icon="home" label="Home" to="/dashboard"><Icon name="home" size='lg' /></TopNavLink>
        <TopNavLink icon="collaboration" label="Community" to="/community"><Icon name="collaboration" size='lg' /></TopNavLink>
        <TopNavLink icon="academy" label="Academy" to="/courses"><Icon name="academy" size='lg' /></TopNavLink>
    </Flex>
    <Box sx={{ display: ['none', 'flex'] }}>
        <Label width="100%"/>
        <TopNavLink icon="settings" label="Settings" to="/settings/profile"><Icon name="settings" size='lg' /></TopNavLink>
    </Box>
</Grid>
export default Menu

const TopNavLink = ({ children, padding, to, ...rest }) => {
    return <Box
        {...rest}
        sx={{
            width: "33%",
            textAlign: "center",
            '&:hover': {
                bg: 'light',
                cursor: 'pointer'
        }}}
    >
        <Link
            to={to}
            getProps={({ isCurrent }) => {
                // the object returned here is passed to the
                // anchor element's props
                return {
                    style: {
                        padding: "10px 20px",
                        display: 'block',
                        borderBottom: isCurrent ? "3px blue solid" : "none"
                    }
                };
            }}
        >
            {children}
        </Link>
    </Box>
}