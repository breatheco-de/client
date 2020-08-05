import React from 'react';
import "./style.scss";
import {Link, BrowserRouter as Router} from "react-router-dom";
import PropTypes from 'prop-types';
import Icon from "../icon";

const SmartLink = ({className, to, url, color, children}) => {
    return (
        <>
            {
                 url !== null ? <a className={`${className} text-${color} link-text styled-link`} target="_blank" rel="noopener noreferrer">{children}<span className="link-arrow"><Icon name='right-arrow' size='xs' color={color}/></span></a>:
                 to !== null ? <Router><Link className={`${className} text-${color} link-text`}>{children}<span className="link-arrow"><Icon name='right-arrow' size='xs' color={color}/></span></Link></Router> :
                 <a>Pass me a url or relative path</a>
            }
        </>
    )
}

SmartLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    url:PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
};

SmartLink.defaultProps = {
    className: "",
    to: null,
    url:null,
    color: "primary",
    children: null
};

export default SmartLink;