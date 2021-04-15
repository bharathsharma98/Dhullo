import React  from "react";
import SANITIZATION from '../../../../Image/sanitization.svg';
import DETAILING from '../../../../Image/detailing.svg';
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.scss";

import moment from "moment";
 
const Alternatesub = (props) => {
 
//   let endDate = 0;
// console.log(props)
//   if (props.duration === "Monthly")
//     endDate = moment(new Date()).add(30, "days").toDate();
//   else if (props.duration === "quarterly")
//     endDate = moment(new Date()).add(90, "days").toDate();

  // const ColoredDateCellWrapper = ({ children, value, pack = props.package }) =>
  //   // React.cloneElement(Children.only(children), {
    //   style: {
    //     ...children.style,

    //     backgroundColor:
    //       pack === "Silver" &&
    //       (moment(value).format("dddd") === "Monday" ||
    //       moment(value).format("dddd") === "Wednesday" ||
    //       moment(value).format("dddd") === "Friday"
    //         ? "white"
    //         : "lightgray"),

    //     visibility:
    //       value < endDate && value > props.startDate ? "true" : "none",
    //   },
    // });
const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("next");
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate("current");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span  >
        <p
          style={{ fontSize: "x-large", padding: "1px", letterSpacing: "1px" }}
        >
          {date.format("MMMM")}
        </p>
        <p
          style={{ fontSize: "x-large", padding: "1px", letterSpacing: "1px" }}
        >
       
          {date.format("YYYY")}
        </p>
      </span>
    );
  };

  return (
    <div>
      <label>{label()}</label>

      <div
        style={{
          position: "relative",
          top: "-3rem",
          display: "flex",
          justifyContent: "center",
          background: "#D6CECE",
        }}
        className="rbc-btn-group"
      >
        <button
          style={{ background: "#D6CECE", color: "#03588C" }}
          onClick={goToBack}
        >
          &#8249;
        </button>
        <button
          style={{ background: "#D6CECE", color: "#03588C" }}
          onClick={goToCurrent}
        >
          Today
        </button>
        <button
          style={{ background: "#D6CECE", color: "#03588C" }}
          onClick={goToNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};
  const localizer = momentLocalizer(moment);

 
  // const customeEvent = () => {
     
  //   return (
  //     <div>
         
  //           <img
  //             src={
  //               SANITIZATION
  //             }
  //             style={{ zIndex: "100" }}
  //             height="30px"
  //             width="30px"
  //           ></img>
          
  //     </div>
  //   ); 
  // }
  return (
    <div>
      <Calendar
    
       onDoubleClickEvent={(events) => props.doubleClickHandler(events)}
        longPressThreshold={10}
        eventPropGetter={(event) => {
          let newStyle = {
         
          };

          if (event.service === "DETAILING") {
          
          
            newStyle.backgroundColor = "orangered";
            newStyle.position = 'absolute'
            newStyle.marginTop = '20px'
            newStyle.marginLeft = '0.5vw'
     newStyle.borderRadius = "100%";
            newStyle.height ='15px'
            newStyle.width = '15px'
           
          
            
          }
          if (event.service === "WASHING") {
            newStyle.backgroundColor = "grey";
            newStyle.borderRadius = "100%";

        newStyle.position = "absolute";
        newStyle.marginTop = "20px";
        newStyle.marginLeft = "6vw";

        newStyle.height = "15px";
        newStyle.width = "15px";
          
            
          }
          if (event.service === "SANITIZATION") {
            newStyle.backgroundColor = "blue";
              
              newStyle.position = "absolute";
              newStyle.marginTop = "20px";
              newStyle.marginLeft = "3vw";
              newStyle.borderRadius = "100%";
              newStyle.height = "15px";
              newStyle.width = "15px";
          }
           
          if (event.serviceStatus === "Complete") {
            newStyle.backgroundColor = "#36c75c";
          }

          if (event.serviceStatus === "Incomplete") {
            newStyle.background = "red";
          }

          return {
            className: "",
            style: newStyle,
          };
        }}
        localizer={localizer}
        events={props.superdailyStatus}
        views={["month"]}
        toolbar={true}
        showMultiDayTimes
         
        // components={{
        //   dateCellWrapper: ColoredDateCellWrapper,
        // }}

        //

        components={
       
        {
                toolbar: CustomToolbar,
                
              }
             
        }
      />
    </div>
  );
};
export default Alternatesub;
