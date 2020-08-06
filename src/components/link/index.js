import React from 'react';
import "./style.scss";
import { Link } from "@reach/router"
import PropTypes from 'prop-types';
import Icon from "../icon";

const SmartLink = ({className, to, url, color, children}) => {
    return (
        <div className={`smart-link ${className} text-${color}`}>
            {url ? 
                <a target="_blank" rel="noopener noreferrer">
                    {children}
                    <Icon name='right-arrow' size='xs' color={color}/>
                </a>
                : to ? <Link to={to}>
                        {children}
                        <Icon name='right-arrow' size='xs' color={color}/>
                    </Link> 
                : <a>Error! Pass me a url or relative path</a>
            }
        </div>
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