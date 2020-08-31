import React from 'react';

let TextComp=()=>{
    let txtsyles={
        margin:'5rem',
        fontSize:'2rem'
    }
    return(
        <div style={txtsyles}>
            <h3>{`text header`}</h3>
            <p>{`text description`}</p>
        </div>
    )
}
export default TextComp;