import React from "react"
import PropTypes from 'prop-types'
import styles from './style.scss';

const Guide = ({ heading, children }) => {
    return <div className="menu-guide rounded border border-light shadow-one p-2">
        <h2 className="text-primary">{heading}</h2>
        <>
        {children}
        </>
    </div>
}

Guide.propTypes = {
    children: PropTypes.node,
};

Guide.defaultProps = {
    children: null,
};
Guide.buttons = ({children}) => <div className="buttons">{children}</div>
Guide.dashboard = ({children}) => <div className="dashboard">{children}</div>

export default Guide