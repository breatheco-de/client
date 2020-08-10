import React from 'react';
import "./style.scss";
import { Link } from "@reach/router";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const ImgButton = ({className,to, children, imgSrc, sub}) => {
    if(imgSrc !== ""){
        return(
            <button className={`img-button btn shadow-one`}>
                <img src={imgSrc} alt="..."/>
                <span>{children}</span>
            </button>
        );
    }
}

ImgButton.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node,
    imgSrc: PropTypes.string,
    sub: PropTypes.string
};

ImgButton.defaultProps = {
    className: "",
    to: null,
    children: null,
    imgSrc: "",
    sub: ""
};

export default ImgButton;