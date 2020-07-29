import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { redirectTo } from "@reach/router"
import Icon from '../components/icon'
import { useEffect } from 'react'
import { Session } from 'bc-react-session'

const Login = ({ location }) => {
    useEffect(() => {
        const session = Session.get('breathecode-session')
        if(session && session.isValid) redirectTo('/dashboard')
    },[])
    return <Container fluid>
    <Row>
        <Col>
            <h1>Login</h1>
            <p>Type here your username to log in</p>
            <Button 
                className="d-flex"
                onClick={() => window.location.href = `${process.env.REACT_APP_GITHUB_LOGIN}?url=${btoa(window.location.protocol+"//"+window.location.hostname+'/login')}`}
            >
                <Icon className="mr-2" color="white" name="github" />
                <span>Login with Github</span>
            </Button>
        </Col>
      <Col xs={8} className="bg-primary vh-100">2 of 3 (wider)</Col>
    </Row>
  </Container>
}

export default Login;