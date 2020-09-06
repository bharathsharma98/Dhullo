import React from 'react';
import carimage from '../../../Image/carinhand.png';
import './imagecontainer.css';

const ImageContainer = () => {
  return (
    <div>
      <img className="imageclass" alt="randomimage" src={carimage} />
    </div>
  );
};
export default ImageContainer;
