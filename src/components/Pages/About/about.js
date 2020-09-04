import React, { Component } from 'react';
import  ImageContainer from '../../UI/content/imagecontainer'
import TextComp from '../../UI/content/TextComponent'
class about extends Component {
  render() {
    let containerStyle={
      display:'flex',
      flexDirection:'row'
  }
    return (
      <div>
      <h1 style={{textAlign:'center'}}>WE MAKE YOUR CAR FEEL GOOD</h1>
        <div  className="mixcontainer1">
          <TextComp/>
          <ImageContainer/>
        </div>
        <h1 style={{textAlign:'center'}}>our story</h1>
        <div className="mixcontainer2">
        <TextComp/>
          <ImageContainer/>
        </div>
        <h1 style={{textAlign:'center'}}>our values</h1>
        <div  className="textcontainer1">
        <TextComp/>
        <TextComp/>
        <TextComp/>
        </div>
      </div>
    );
  }
}

export default about;