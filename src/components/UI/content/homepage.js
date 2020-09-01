import React from 'react';
import TextComp from './TextComponent'
 import ImageContainer from './imagecontainer'
const Homepage =()=>{
    let containerStyle={
        display:'flex',
        flexDirection:'row'
    }
return(
    <div>
         <h1>We SWear By</h1>
        <div  className="container" style={containerStyle}>
        <TextComp/>
        <ImageContainer/>
       

        </div>
        <div  className="container" style={containerStyle}>
         
        <TextComp/>
        <TextComp/>
       
        </div>
        <div  className="container" style={containerStyle}>
        
        <ImageContainer/>
        <TextComp/>

        </div>
       
       
      
        <h1>HOW IT WORKS</h1>

            
    </div>
)
}
export default Homepage ;