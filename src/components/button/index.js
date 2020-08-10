import React from "react"
import {Button} from "react-bootstrap";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant }) => 
    <Button variant={`outline-${variant} shadow-one`} className={styles.btn}>{children} <span className={`arrow`}>→</span>
</Button>

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};

SmartButton.defaultProps = {
    variant: 'primary',
    children: null,
};

export default SmartButton