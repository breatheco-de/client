import React from "react"
import { Button } from "react-bootstrap";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant, imgSrc, sub, arrow, subBackground, onClick }) => {
    
    if (sub) {
        return (
            <button className={`outline-${variant} img-button btn shadow-one sub`} onClick={onClick}>
                {imgSrc ? <img src={imgSrc} alt="..." />: ""}
                <div>
                    <span>{children}</span>
                    <span className={`bg-${subBackground}`}>{sub}</span>
                </div>
                {arrow ? <span className={`arrow`}>→</span> : ""}
            </button>)
    } else {
        return (
            <Button variant={`outline-${variant} shadow-one btn ${imgSrc ? "img-button": ""}`} onClick={onClick}>
                {imgSrc ? <img src={imgSrc} alt="..." />: ""}
                {children} {arrow ? <span className={`arrow`}>→</span> : ""}
            </Button>)
    }
}

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    imgSrc: PropTypes.string,
    sub: PropTypes.string,
    arrow: PropTypes.bool,
    subBackground: PropTypes.string,
    onClick: PropTypes.func
};

SmartButton.defaultProps = {
    variant: 'primary',
    children: null,
    imgSrc: "",
    sub: "",
    arrow: false,
    subBackground: ""
};

export default SmartButton;