import React,{useState, useEffect} from "react"
import { Button } from "react-bootstrap";
import Icon from "../icon";
import { Link } from "@reach/router";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant, onClick, icon, to, className, ...rest }) => {
     
     return(
         <>
             {
                 to ? 
                    <Link to={to} className={`btn-outline-${variant} shadow-one btn ${className}`} {...rest}>
                          {children}
                        <Icon name={icon} size='md' />
                    </Link> 
                   :
                <Button variant={`outline-${variant} shadow-one btn ${className}`} onClick={onClick} {...rest}>
                    {children}
                    <Icon name={icon} size='md' />
                </Button> 
             }
         </>
        
    )
}

SmartButton.HoverLayer = ({children, variant = "", ...rest}) => <div className={`hover-layer ${variant}`}>{children}</div>
SmartButton.Label = ({children, icon, variant = "", ...rest}) => <>{icon ? <div className={`label-content ${variant}`}><div><Icon name={icon} size='md' /></div><label>{children}</label></div> : <label className={`button-label ${variant}`}>{children}</label>}</>
SmartButton.Section = ({children, variant = "", ...rest}) => <div className={`button-section ${variant}`}>{children}</div>

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string
};

SmartButton.defaultProps = {
    variant: 'primary-light',
    children: null,
    icon: "arrow",
    to:null,
    className: ""
};

export default SmartButton;