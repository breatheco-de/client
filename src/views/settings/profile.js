/** @jsx jsx */
import { jsx, Text, Label, Flex, Box, Button, Input, Textarea, useThemeUI } from 'theme-ui'
import PanelView from '../../components/panel-view'
import { useForm } from "react-hook-form"
import Checkbox from '../../components/checkbox'

const Profile = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { colorMode, setColorMode } = useThemeUI()
    const onSubmit = data => console.log("Form submited",data);

    return <PanelView heading="Profile Settings">
        <Box
        as='form'
        onSubmit={handleSubmit(onSubmit)}>
            <Flex mb={3}>
                <Box>
                    <Label htmlFor='first_name'>First Name</Label>
                    <Input name='first_name' id='first_name' ref={register({ required: true })} />
                    {errors.first_name && <Text color="danger">This field is required</Text>}
                </Box>
                <Box ml={3}>
                    <Label htmlFor='last_name'>Last Name</Label>
                    <Input name='last_name' id='last_name' ref={register({ required: true })} />
                    {errors.last_name && <Text color="danger">This field is required</Text>}
                </Box>
            </Flex>
            <Label htmlFor='comment'>About you (100 words to describe yourself)</Label>
            <Textarea  ref={register({ required: true })}
                name='comment'
                id='comment'
                rows='2'
            />
            {errors.comment && <Text color="danger">This field is required</Text>}
            <Button mt={3}>Save</Button>
            <Label htmlFor='comment'>Enable dark mode</Label>
            <Checkbox onChange={() => setColorMode(colorMode === "light" ? "dark":"light")} />
        </Box>
    </PanelView>
}

export default Profile;