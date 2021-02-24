import "./ActiveSub.css";
import React, { useState, useEffect } from "react";
 
import styled, { css } from "styled-components";
import {addCal,updateCal}from '../../../../Redux/calender/calenderActions'
import { useDispatch } from 'react-redux';
 let recievedStatus ={date:25,status:'active'}
const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid gray;
      border-radius: 3px;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
    ${(props) =>
    props.isToday &&
    props.todaysstatus === "done" &&
    css`
      background-color: green;
    `}
      ${(props) =>
    props.isToday &&
    props.todaysstatus === "pending" &&
    css`
      background-color: cyan;
    `}
          ${(props) =>
    props.isToday &&
    props.todaysstatus === "missed" &&
    css`
      background-color: red;
    `}
      ${(props) =>
    props.package === "silver" &&
    css`
      :nth-child(even) {
        background-color: gray;
      }
    `}
          ${(props) =>
    props.package === "gold" &&
    props.package === "platinum" &&
    css`
      :nth-child(even) {
        background-color: white;
      }
    `}
`;
 
export default function ActiveSub() {
  const dispatch = useDispatch();
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const today = new Date();

  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  let tempcal = [];
  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    //get start date here and end date here and calculate the subscription dates
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
  
 
  console.log(tempcal)
  dispatch(addCal(tempcal));
  dispatch(updateCal(recievedStatus))

  
   
     
 
  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Prev
        </Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button
          onClick={() => {
            setDate(new Date(year, month + 1, day));
          }}
        >
          Next
        </Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}

        {Array(days[month] + (startDay - 1))
          .fill({ day: days, status: "" })
          .map((data, index) => {
            const d = { d: index - (startDay - 2), status: "" };

            tempcal.push(d);
            
            //dispatch temp as initial calender reducer
            // get data ( date package and status ) and dispatch to reducer
            // let the function do its task in reducer by spreading state
            //get back cars and render

            //send tempcal.day as payload and let the reducer store it in array (dates:[])
            //here after reciving the status well send the status with another action
            //let the reducer take action and previous dates and run through the function (filter)
            //let it change the status and etc based on the action.payload
            //then once that is done well take that array from reducer and render it here with hekp of array in reducer

            

            return (
              <Day
                key={index}
                isToday={d.d === today.getDate()}
             
                isSelected={d.d === day}
            
                onClick={() => console.log(d.d, d.status)}
              >
                <div>
                  {d.d > 0 ? d.d : " "}
                  {/* <small>{d.status}</small> */}
                </div>
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}
