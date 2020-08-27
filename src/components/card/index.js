import React, { useState, useEffect } from "react"
import Icon from "../icon";
import styles from './style.scss';
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { Link } from "@reach/router";

const SmartCard = ({className,variant,children,icon,to,onClick}) => {
    return (
            <Card className={`shadow-one smart-card ${className} ${variant || ""} ${onClick ? "click":""}`} onClick={onClick}>
                 {children}
                <Icon name={icon} size='md' />
            </Card>
    );
}

SmartCard.Img = ({src,variant}) => <Card.Img src={src} variant={"top" || variant} />
SmartCard.Body = ({children}) => <Card.Body>{children}</Card.Body>
SmartCard.Title = ({children}) => <Card.Title>{children}</Card.Title>
SmartCard.Text = ({children}) => <Card.Text>{children}</Card.Text>

SmartCard.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string
}

SmartCard.defaultProps = {
    variant: 'primary-light',
    children: null,
    icon: "arrow",
    to:null,
    className: ""
};

export default SmartCard;