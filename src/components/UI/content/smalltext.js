import React from 'react';
import './smalltext.css'
let SmallTextComp=()=>{
    let textstyles={
        height:'3rem',
        width:'15rem',
        borderRadius:'10px',
            
    }
    return(
        <div className="textcontainer" style={textstyles}>
            <h3>{ `Car Care`}</h3>
             
        </div>
    )
}
export default SmallTextComp;