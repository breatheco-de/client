/** @jsx jsx */
import { jsx, Box, Label, Flex, Heading, Input, Button, Styled } from 'theme-ui'
import NavBar from '../components/color-picker/ColorPicker.js'

const Home = () => <Box
    p={4}
    bg='highlight'
>
<Flex
  sx={{
    alignItems: 'center',
  }}>
  <Heading>
    You are in
  </Heading>
  <NavBar />
</Flex>
</Box>

export default Home;