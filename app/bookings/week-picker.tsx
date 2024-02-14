"use client"
import React from "react";
import {
  FaCalendarCheck,
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

function WeekPicker() {
  return (
    <div className="week-picker grid grid-cols-[repeat(4,minmax(auto,1fr))] md:grid-cols-[repeat(6,minmax(auto,1fr))] gap-2 ">
      {/* Today's date button */}
      <button className="">
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
          placeholder="2023-06-24"
        />
      </div>
      {/* Go button */}
      <button className="w-auto">
        <FaCalendarCheck />
        <span className="">Go</span>
      </button>

      {/* Previous date button */}
      <button className="md:order-first">
        <FaChevronLeft />
        <span className="">Prev</span>
      </button>

      {/* Next button */}
      <button className="col-start-[-2]">
        <span className="">Next</span>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default WeekPicker;
