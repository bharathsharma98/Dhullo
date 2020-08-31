import React from 'react'
import { findByLabelText } from '@testing-library/react';
import { Link } from 'react-router-dom';
function ImgComponent(props){

    let imgStyles = {
        width: "30%",
        height: "30vh",
        margin:'3rem'
       
              
    }
    let CompStyles ={
        width: "90%",
        height: "40vh",  
        marginLeft:'5rem',
        marginRight:'5rem',
        marginTop:'2rem',
        display:"flex",
        border: '3px solid #026D70',
        borderRadius: '60px'

    }
    
    return (
        <div className="imagecomp"  style={CompStyles}>
            <Link>
            <img src = {props.imgComponent.imgSrc} alt= "slide-img" style ={imgStyles}></img>
            </Link>
            
            <h3>{props.imgComponent.description}</h3>
            <p>{props.imgComponent.details}</p>
            
        </div>
    );
}

export default ImgComponent;