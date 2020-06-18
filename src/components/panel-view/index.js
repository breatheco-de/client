/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

const PanelView = ({ children, heading }) => <Container
    sx={{
        padding: "0 20px"
    }}
>
    <h1 sx={{ marginTop: "0px" }}>{heading}</h1>
    {children}
</Container>

export default PanelView;