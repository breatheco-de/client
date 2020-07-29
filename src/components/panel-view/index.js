import React from "react"
import { Container } from 'react-bootstrap'

const PanelView = ({ children, heading }) => <Container>
    <h1 sx={{ marginTop: "0px" }}>{heading}</h1>
    {children}
</Container>

export default PanelView;