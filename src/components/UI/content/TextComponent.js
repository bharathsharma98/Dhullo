import React from 'react';

let TextComp=()=>{
    let txtsyles={
        margin:'2rem',
        fontSize:'2rem',
    
    }
    return(
        <div style={txtsyles}>
            <h3>{ `Car Care`}</h3>
            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that t has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors`}</p>
        </div>
    )
}
export default TextComp;