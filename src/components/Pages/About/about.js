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
      <h1>WE MAKE YOUR CAR FEEL GOOD</h1>
        <div style={containerStyle}>
          <TextComp/>
          <ImageContainer/>
        </div>
        <h1>our story</h1>
        <div  style={containerStyle}>
        <TextComp/>
          <ImageContainer/>
        </div>
        <h1>our values</h1>
        <div  style={containerStyle}>
        <TextComp/>
        <TextComp/>
        <TextComp/>
        </div>
      </div>
    );
  }
}

export default about;