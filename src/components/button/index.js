import React,{useState, useEffect} from "react"
import { Button } from "react-bootstrap";
import Icon from "../icon";
import { Link } from "@reach/router";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant, onClick, icon, to, className }) => {
     
     return(
         <>
             {
                 to ? 
                    <Link to={to} className={`btn-outline-${variant} shadow-one btn`}>
                          {children}
                        <Icon name={icon} size='md' />
                    </Link> 
                   :
                <Button variant={`outline-${variant} shadow-one btn ${className}`} onClick={onClick}>
                    {children}
                    <Icon name={icon} size='md' />
                </Button> 
             }
         </>
        
    )
}

SmartButton.HoverLayer = ({children, className}) => <div className={`hover-layer ${className}`}>{children}</div>
SmartButton.Label = ({children, icon, className}) => <>{icon ? <div className="label-content"><div><Icon name={icon} size='md' /></div><label>{children}</label></div> : <label className="button-label">{children}</label>}</>
SmartButton.Section = ({children, className}) => <div className={`button-section ${className}`}>{children}</div>

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string
};

SmartButton.defaultProps = {
    variant: 'primary',
    children: null,
    icon: "arrow",
    to:null,
    className: ""
};

export default SmartButton;