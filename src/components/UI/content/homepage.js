import React from 'react';
import TextComp from './TextComponent'
 import ImageContainer from './imagecontainer'
 import './homepage.css'
const Homepage =()=>{
    let containerStyle={
        display:'flex',
        flexDirection:'row'
    }
return(
    <div>
         <h1>We Swear By</h1>
        <div  className="container" style={containerStyle}>
        <ImageContainer/>
        <TextComp/>
        
       

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