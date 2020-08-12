import React from 'react';
import "./style.scss";
import { Link } from "@reach/router"
import PropTypes from 'prop-types';
import Icon from "../icon";

const SmartLink = ({ className, to, url, color, children, type, imgSrc, subBackground, sub, arrow }) => {
    if (type === "button") {
        return (
            <div className={`${className} text-${color} `}>
                {url ?
                    <a target="_blank" rel="noopener noreferrer" href={url} className={`btn shadow-one smart-link ${sub ? "sub":""}`}>
                        {imgSrc ? <img src={imgSrc} alt="..." /> : ""}
                        {sub ? <div>
                                    <span>{children}</span>
                                    <span className={`bg-${subBackground}`}>{sub}</span>
                                </div> : children}
                        {arrow ? <span className={`arrow`}>→</span> : ""}
                    </a>
                    : to ? <Link to={to} className={`btn shadow-one smart-link ${sub ? "sub":""}`}>
                        {imgSrc ? <img src={imgSrc} alt="..." /> : ""}
                        {sub ? <div>
                                    <span>{children}</span>
                                    <span className={`bg-${subBackground}`}>{sub}</span>
                                </div> : children}
                        {arrow ? <span className={`arrow`}>→</span> : ""}
                    </Link>
                        : <a>Error! Pass me a url or relative path</a>
                }
            </div>
        )
    } else {
        return (
            <div className={`smart-link ${className} text-${color}`}>
                {url ?
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        {children}
                        <Icon name='right-arrow' size='xs' color={color} />
                    </a>
                    : to ? <Link to={to}>
                        {children}
                        <Icon name='right-arrow' size='xs' color={color} />
                    </Link>
                        : <a>Error! Pass me a url or relative path</a>
                }
            </div>
        )
    }

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