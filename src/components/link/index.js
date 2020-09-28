import React from 'react';
import "./style.scss";
import { Link } from "@reach/router"
import PropTypes from 'prop-types';
import Icon from "../icon";

const SmartLink = ({ className, to, url, color, children }) => {
        return (
            <div className={`smart-link ${className} text-${color}`}>
                {url ?
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        {children}
                        <Icon name='arrow-right' size='xs' color={color} />
                    </a>
                    : to ? <Link to={to}>
                        {children}
                        <Icon name='arrow-right' size='xs' color={color} />
                    </Link>
                        : <a>Error! Pass me a url or relative path</a>
                }
            </div>
        )
}
SmartLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    imgSrc: PropTypes.string,
    type: PropTypes.string,
    subBackground: PropTypes.string,
    sub: PropTypes.string,
    arrow: PropTypes.bool
};
SmartLink.defaultProps = {
    className: "",
    to: null,
    url: null,
    color: "primary",
    children: null,
    imgSrc: "",
    type: "link",
    subBackground: "",
    sub: "",
    arrow:false
};

export default SmartLink;