/** @jsx jsx */
import { jsx, Container, Label, Flex, Box, Checkbox, Button, Select, Input, Textarea, Radio, Slider } from 'theme-ui'
import PanelView from '../../components/panel-view'

const Home = () => <PanelView heading="Profile Settings">
    
    <Box
    as='form'
    onSubmit={e => e.preventDefault()}>
        <Flex mb={3}>
            <Box>
                <Label htmlFor='first_name'>First Name</Label>
                <Input name='first_name' id='first_name' />
            </Box>
            <Box ml={3}>
                <Label htmlFor='last_name'>Last Name</Label>
                <Input name='last_name' id='last_name' />
            </Box>
        </Flex>
    <Label htmlFor='password'>Password</Label>
    <Input
        type='password'
        name='password'
        id='password'
        mb={3}
    />
    <Box>
        <Label mb={3}>
        <Checkbox />
        Remember me
        </Label>
    </Box>
    <Label htmlFor='sound'>Sound</Label>
    <Select name='sound' id='sound' mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
    </Select>
    <Label htmlFor='comment'>Comment</Label>
    <Textarea
        name='comment'
        id='comment'
        rows='6'
        mb={3}
    />
    <Flex mb={3}>
        <Label>
        <Radio name='letter' /> Alpha
        </Label>
        <Label>
        <Radio name='letter' /> Bravo
        </Label>
        <Label>
        <Radio name='letter' /> Charlie
        </Label>
    </Flex>
    <Label>
        Slider
    </Label>
    <Slider mb={3} />
    <Button>
        Submit
    </Button>
    </Box>

</PanelView>

export default Home;