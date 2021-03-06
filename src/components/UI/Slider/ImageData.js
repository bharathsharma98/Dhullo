import i1b from '../../../Image/Group 93@2x.png'
import i1 from "../../../Image/Group 89@2x.png";
// import i2 from '../../../Image/car shine.jpg'
import i2b from "../../../Image/Group 90@2x.png";
import i2 from "../../../Image/Group 90@2x.png";
//import i3 from '../../../Image/interior.jpg'
import i3b from "../../../Image/Group 92@2x.png";
import i3 from "../../../Image/Group 92@2x.png";
//import i4 from '../../../Image/water_waste.jpg'
import i4b from "../../../Image/Group 91@2x.png";
import i4 from "../../../Image/Group 91@2x.png";
const width = { matches: window.matchMedia("(min-width: 768px)").matches };
const sliderArr = [
  {
    id: 1,
    imgSrc: width.matches ? i1 : i1b,
    description: "Step towards protecting valuable resource",
    details: "Check our Car Sanitization Packages available at your service.",
  },
  {
    id: 2,
    imgSrc: width.matches ? i4 : i4b,
    description: "Step towards protecting valuable resource",
    details: "Why waste tons of water when it can be done with 200ml.",
  },
  {
    id: 3,
    imgSrc: width.matches ? i2 : i2b,
    description: "Make your car shine as new.",
    details: "Check our detailing packages to shine your car.",
  },
  {
    id: 4,
    imgSrc: width.matches ? i3 : i3b,
    description: "Beauty lies within.",
    details: "Check our interior detail packages at your service.",
  },
];

export default sliderArr;
