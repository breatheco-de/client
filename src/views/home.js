/** @jsx jsx */
import { jsx, Box, Label, Flex, Heading, Input, Button, Styled } from 'theme-ui'


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
</Flex>
</Box>

export default Home;