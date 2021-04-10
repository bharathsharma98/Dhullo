import i1b from "../../../Image/offersMobile.png";
import i1 from "../../../Image/offersDesktop.png";
// import i2 from '../../../Image/car shine.jpg'
import i2b from "../../../Image/detailingMobile.png";
import i2 from "../../../Image/detailingDesktop.png";
//import i3 from '../../../Image/interior.jpg'
import i3 from "../../../Image/washingDesktop.png";
import i3b from "../../../Image/washingMobile.png";
//import i4 from '../../../Image/water_waste.jpg'
import i4b from "../../../Image/sanitizationMobile.png";
import i4 from "../../../Image/sanitizationDesktop.png";
const width = { matches: window.matchMedia("(min-width: 768px)").matches };
const sliderArr = [
  {
    id: 3,
    imgSrc: width.matches ? i3 : i3b,
    description: "WASHING",
    details: "Check our interior detail packages at your service.",
    color: "#FF070A",
    subColor: "#FA4448",
  },
  {
    id: 1,
    imgSrc: width.matches ? i4 : i4b,
    description: "SANITIZATION",
    details: "Why waste tons of water when it can be done with 200ml.",
    color: "#09736A ",
    subColor: "#0E5159",
  },
  {
    id: 2,
    imgSrc: width.matches ? i2 : i2b,
    description: "DETAILING",
    details: "Why waste tons of water when it can be done with 200ml.",
    color: "#F2E205",
    subColor: "#F2CB05",
  },

  {
    id: 4,
    imgSrc: width.matches ? i1 : i1,
    description: "OFFERS",
    details: "Check our Car  available at your service.",
    color: "#FF920F",
    subColor: "#CC740C",
  },
];

export default sliderArr;
