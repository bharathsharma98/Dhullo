import React  from "react";

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
      <span>
        <b>{date.format("MMMM")}</b>
        <span> {date.format("YYYY")}</span>
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
  return (
    <div>
      <Calendar
        longPressThreshold={10}
        eventPropGetter={(event) => {
          let newStyle = {
            backgroundColor: "gray",
            color: "black",
            borderRadius: "100%",
            border: "none",
          };

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
        events={props.events}
        views={["month"]}
        toolbar={true}
        showMultiDayTimes
        // components={{
        //   dateCellWrapper: ColoredDateCellWrapper,
        // }}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};
export default Alternatesub;
