/** @jsx jsx */
import { jsx, Box, Text, Flex, Heading, Input, Button, Styled } from 'theme-ui'
import { redirectTo } from "@reach/router"
import * as queryString from 'query-string'
import Icon from '../components/icon'
import { autoLogin } from "../common/actions"
import NavBar from '../components/color-picker/ColorPicker.js'
import { useEffect } from 'react'
import { Session } from 'bc-react-session'

const Login = ({ location }) => {
    useEffect(() => {
        const session = Session.get()
        if(session.isValid) redirectTo('/dashboard')
    },[])
    return <Flex
            sx={{
            height: '100vh',
            width: "100%"
            }}
        >
        <Box 
            p={4}
            sx={{
            alignItems: 'center',
            width: ["600px"]
            }}
        >
            <Styled.h1>Login</Styled.h1>
            <Styled.p>Type here your username to log in</Styled.p>
            <Button variant='primary' onClick={() => {
                window.location.href = `${process.env.REACT_APP_GITHUB_LOGIN}?url=${btoa(window.location.protocol+"//"+window.location.hostname+'/login')}`
            }}>
                <Flex>
                    <Icon name="github" />
                    <Text sx={{ ml: "5px" }} variant='caps'>Login with Github</Text>
                </Flex>
            </Button>
        </Box>
        <Box
            sx={{
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            fontFamily: 'body',
            width: "100%",
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
            }}
        >
            Message
        </Box>
    </Flex>
}

export default Login;