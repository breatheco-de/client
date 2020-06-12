/** @jsx jsx */
import { jsx, Box, Label, Flex, Heading, Input, Button, Styled } from 'theme-ui'
import NavBar from '../components/color-picker/ColorPicker.js'

const Login = () => <Box
    p={4}
    bg='highlight'
>
<Flex
  sx={{
    alignItems: 'center',
  }}>
  <Heading>
    Login
    <Styled.h1>Theme UI + Create React App</Styled.h1>
  </Heading>
  <NavBar />
</Flex>
</Box>

export default Login;