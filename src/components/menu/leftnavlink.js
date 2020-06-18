import React from "react"
import { navigate, Link } from "@reach/router"
import { Button, Grid, Flex, Box, Label } from 'theme-ui'
import Icon from '../icon'

const LeftNavLink = ({ children, icon, label, padding, to, ...rest }) => {
    return <Box
        {...rest}
        sx={{
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
                        textDecoration: "none",
                        padding: "10px 20px",
                        display: 'block',
                        borderRight: isCurrent ? "3px blue solid" : "none"
                    }
                };
            }}
        >
            <Flex><Icon name={icon} size='md' /> <Label sx={{ '&:hover': { cursor: 'pointer' }}} ml={1}>{label}</Label></Flex>
        </Link>
    </Box>
}
export default LeftNavLink