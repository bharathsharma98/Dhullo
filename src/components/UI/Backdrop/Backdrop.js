import React from 'react';
import './Backdrop.css'

export const Backdrop = props => (
    <div className = "backdrop" onClick = {props.click} />
);

 

export const LoginBackdrop = (props) => (
  <div className="Loginbackdrop" onClick={props.click} />
);

 