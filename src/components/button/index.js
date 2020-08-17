import React,{useState, useEffect} from "react"
import { Button } from "react-bootstrap";
import Icon from "../icon";
import { Link } from "@reach/router";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant, onClick, icon, to }) => {
     
     return(
         <>
             {
                 to ? 
                      <Link to={to} className={`outline-${variant} shadow-one btn`}>
                          {children}
                        <Icon name={icon} size='md' color={variant}/>
                      </Link> 
                   :
                 <Button variant={`outline-${variant} shadow-one btn`} onClick={onClick}>
                    {children}
                    <Icon name={icon} size='md' color={variant}/>
                </Button> 
             }
         </>
        
    )
}

SmartButton.HoverLayer = ({children}) => <div className="hover-layer">{children}</div>
SmartButton.Label = ({children}) => <label className="button-label">{children}</label>
SmartButton.Section = ({children}) => <div className="button-section">{children}</div>

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    to: PropTypes.string
};

SmartButton.defaultProps = {
    variant: 'primary',
    children: null,
    icon: "arrow",
    to:null
};

export default SmartButton;