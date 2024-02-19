"use client";
import React, { useReducer, useRef, useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { weekPickerReducer } from "./weekpicker-reducer";
import { getWeek, shortISODate } from "../lib/date-wrangler";

function WeekPicker() {
  const [dateInputText, setDateInputText] = useState("2023-06-24");
  console.log(dateInputText);

  const dateTextInputEl = useRef<HTMLInputElement>();

  const [week, dispatch] = useReducer(
    weekPickerReducer,
    new Date("2023-06-24"),
    getWeek
  );

  console.log(week);

  //event handlers
  function handleNextButtonClick() {
    dispatch({ type: "next" });
  }

  function handlePrevButtonClick() {
    dispatch({ type: "prev" });
  }

  function handleTodayButtonClick() {
    dispatch({ type: "today" });
  }

  function handleGoButtonClick() {
    dispatch({ payload: new Date(dateInputText), type: "go" });
  }
  // function handleDateOnChange(e: ) {
  //   setDateInputText(e)
  // }

  return (
    <div className="week-picker grid grid-cols-[repeat(4,minmax(auto,1fr))] md:grid-cols-[repeat(6,minmax(auto,1fr))] gap-2 ">
      {/* Today's date button */}
      <button className="" onClick={handleTodayButtonClick}>
        <FaCalendarDay />
        <span className="">Today</span>
      </button>

      {/* Date text input box */}
      <div className="col-span-2 flex justify-center">
        <input
          className="w-full flex-grow rounded-3xl border-gray-500 text-center px-3 py-2"
          type="text"
          name="date"
          id=""
          value={dateInputText}
          // defaultValue={shortISODate(week.startDate)}
          placeholder="2023-06-24"
          onChange={(e) => setDateInputText(e.target.value)}
        />
      </div>
      {/* Go button */}
      <button className="w-auto" onClick={handleGoButtonClick}>
        <FaCalendarCheck />
        <span className="">Go</span>
      </button>

      {/* Previous date button */}
      <button className="md:order-first" onClick={handlePrevButtonClick}>
        <FaChevronLeft />
        <span className="">Prev</span>
      </button>

      {/* Next button */}
      <button className="col-start-[-2]" onClick={handleNextButtonClick}>
        <span className="">Next</span>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default WeekPicker;
