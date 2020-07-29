import React from "react"
import { Row, Col, Form, Button } from 'react-bootstrap'
import PanelView from '../../components/panel-view'
import { useForm } from "react-hook-form"
import Checkbox from '../../components/checkbox'

const Profile = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log("Form submited",data);

    return <PanelView heading="Profile Settings">
        <Row>
            <Col>
                <Form.Label htmlFor='first_name'>First Name</Form.Label>
                <Form.Control type="text" name='first_name' id='first_name' ref={register({ required: true })} />
                {errors.first_name && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
            </Col>
            <Col>
                <Form.Label htmlFor='last_name'>Last Name</Form.Label>
                <Form.Control type="text" name='last_name' id='last_name' ref={register({ required: true })} />
                {errors.last_name && <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>}
            </Col>
        </Row>
        <Form.Label htmlFor='comment'>About you (100 words to describe yourself)</Form.Label>
        <Button mt={3}>Save</Button>
    </PanelView>
}

export default Profile;