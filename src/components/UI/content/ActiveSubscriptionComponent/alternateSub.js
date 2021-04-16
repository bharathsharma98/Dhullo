import React  from "react";
import SANITIZATION from '../../../../Image/sanitization.svg';
import DETAILING from '../../../../Image/detailing.svg';
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.scss";

import moment from "moment";
 
const Alternatesub = (props) => {
  const today = new Date();
 
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
    // return (
    //   <span  >
    //     <p
    //       style={{ fontSize: "x-large", padding: "1px", letterSpacing: "1px" }}
    //     >
    //       {date.format("MMMM")}
    //     </p>
    //     <p
    //       style={{ fontSize: "x-large", padding: "1px", letterSpacing: "1px" }}
    //     >
       
    //       {date.format("YYYY-mm-dd")}
    //     </p>
    //   </span>
    // );
  };

  return (
    <div>
      <label>{label()}</label>

      <div
        style={{
          position: "relative",
          top: "0rem",
          paddingTop: "3%",
          paddingBottom: "2%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#D6CECE",
        }}
        className="rbc-btn-group"
      >
        <button
          style={{
            background: "#D6CECE",
            color: "#03588C",
            fontSize: "4rem",
            marginRight: "-1.8rem",
            width: "100px",
            background: "none",
            marginTop: "-3rem",
          }}
          onClick={goToBack}
        >
          &#8249;
        </button>
        <button
          style={{
            background: "#D6CECE",
            color: "#03588C",
            fontSize: "1.8rem",
            padding: "0%",
          }}
          onClick={goToCurrent}
        >
          {moment(today).format("d MMMM  YYYY")}
        </button>
        <button
          style={{
            background: "#D6CECE",
            color: "#03588C",
            fontSize: "4rem",
            marginTop: "-3rem",
            marginLeft: "-2rem",
            width: "100px",
            background: "none",
          }}
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
      popup
       onShowMore={false}
       onDoubleClickEvent={(events) => props.doubleClickHandler(events)}
        longPressThreshold={10}
        eventPropGetter={(event) => {
          let newStyle = {
         
          };

          if (event.service === "DETAILING") {
          
          
            newStyle.backgroundColor = "orangered";
            newStyle.position = 'relative'
            newStyle.marginTop = '-50px'
            newStyle.marginLeft = '0.5vw'
            newStyle.borderRadius = "0%";
            newStyle.height = '20rem';
            newStyle.width = '20rem';
  
            newStyle.repeat = 'none';

           newStyle.backgroundImage =
             "url('https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0/1595530301220?e=2159024400&v=beta&t=IJmg_K1W7KCh6082rXN9V7gzlrD9GMwYqk_EjCrDxGw')";
          
            
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
