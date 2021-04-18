import React  from "react";
import SANITIZATION from '../../../../Image/sanit.png';
import DETAILING from '../../../../Image/det.png';
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.scss";

import moment from "moment";
 
const Alternatesub = (props) => {
 
   const width = { matches: window.matchMedia("(min-width: 768px)").matches };
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
 const date = moment(toolbar.date);
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
          border:'none'
        }}
         
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
            fontSize: "1.4rem",
            padding: "0%",
            width: '15vw'
          }}
          // onClick={goToCurrent}
        >
          {date.format("MMMM YYYY")}
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
  const slothandler = (date) => {
    console.log("date is",date)
  }
  return (
    <div>
      <Calendar
        popup
        onShowMore={false}
        onDrillDown={(date, events) => props.doubleClickHandler(date, events)}
        // onSelectEvent={(events) => props.doubleClickHandler(events)}
        longPressThreshold={10}
        eventPropGetter={(event) => {
          let newStyle = {};
          if (width.matches === true) {
            if (event.service === "DETAILING") {
              newStyle.backgroundColor = "white";
              newStyle.position = "absolute";
              newStyle.marginTop = "-1.5vw";
              newStyle.marginLeft = "0vw";
              newStyle.borderRadius = "0%";
              newStyle.height = "35px";
              newStyle.width = "35px";

              newStyle.repeat = "no-repeat";

              newStyle.backgroundImage = `url(${DETAILING})`;
              newStyle.backgroundRepeat = "no-repeat";
              newStyle.backgroundSize = "100% 100%";
            }
            if (event.service === "WASHING") {
              newStyle.backgroundColor = "grey";
              newStyle.borderRadius = "100%";

              newStyle.position = "absolute";
              newStyle.marginTop = "2vw";
              newStyle.marginLeft = "7.5vw";

              newStyle.height = "20px";
              newStyle.width = "20px";
            }
            if (event.service === "SANITIZATION") {
              newStyle.backgroundColor = "inherit";

              newStyle.position = "absolute";
              newStyle.marginTop = "0.3vw";
              newStyle.marginLeft = "3.5vw";

              newStyle.height = "28px";
              newStyle.width = "28px";
              newStyle.backgroundImage = `url(${SANITIZATION})`;
              newStyle.backgroundRepeat = "no-repeat";
              newStyle.backgroundSize = "100% 100%";
            }
          } else {
            if (event.service === "DETAILING") {
              newStyle.position = "relative";
              newStyle.marginTop = "-3vw";
              newStyle.marginLeft = "0.5vw";
              newStyle.borderRadius = "0%";
              newStyle.height = "20px";
              newStyle.width = "20px";

              newStyle.repeat = "no-repeat";
              newStyle.backgroundColor = "inherit";
              newStyle.backgroundImage = `url(${DETAILING})`;
              newStyle.backgroundRepeat = "no-repeat";
              newStyle.backgroundSize = "100% 100%";
            }
            if (event.service === "WASHING") {
              newStyle.backgroundColor = "grey";
              newStyle.borderRadius = "100%";

              newStyle.position = "absolute";
              newStyle.marginTop = "5vw";
              newStyle.marginLeft = "9vw";

              newStyle.height = "18px";
              newStyle.width = "18px";
            }
            if (event.service === "SANITIZATION") {
              newStyle.backgroundColor = "inherit";
              newStyle.borderRadius = "0%";
              newStyle.position = "absolute";
              newStyle.marginTop = "1vw";
              newStyle.marginLeft = "4.6vw";

              newStyle.height = "16px";
              newStyle.width = "16px";
              newStyle.backgroundImage = `url(${SANITIZATION})`;
              newStyle.backgroundRepeat = "no-repeat";
              newStyle.backgroundSize = "100% 100%";
            }
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

        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};
export default Alternatesub;
