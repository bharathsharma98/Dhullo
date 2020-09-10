import React from "react";
import "./ImgComp.css";
class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: " ",
    };
  }

  render(props) {
    console.log(this.props.type);
    return (
      <div className="imgcontainer">
        <img src={this.props.type} alt=""></img>
      </div>
    );
  }
}
export default MainImage;
