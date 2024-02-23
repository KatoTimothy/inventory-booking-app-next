"use client";
import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { getWeek, shortISODate } from "../lib/date-wrangler";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Week } from "../lib/types-definitions";
import { useBookingsSearchParams } from "../lib/custom-hooks";
import Link from "next/link";

function WeekPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const week = useBookingsSearchParams(searchParams);

  // console.log(week);

  //state
  const [dateInputText, setDateInputText] = useState("2023-06-24");

  function setUrlSearchParams(week: Week) {
    console.log(week);
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("date_gte", shortISODate(week.startDate));
    urlSearchParams.set("date_lte", shortISODate(week.endDate));

    console.log(urlSearchParams.toString());
    return urlSearchParams.toString();
  }

  return (
    <div className="week-picker grid grid-cols-[repeat(4,minmax(auto,1fr))] md:grid-cols-[repeat(6,minmax(auto,1fr))] gap-2 ">
      {/* Today's date button */}

      <Link
        className="btn-link"
        href={`${pathname}?${setUrlSearchParams(getWeek(new Date()))}`}
      >
        Today
      </Link>

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
      <Link
        className="btn-link"
        href={`${pathname}?${setUrlSearchParams(
          getWeek(new Date(dateInputText))
        )}`}
      >
        <FaCalendarCheck />
        <span className="">Go</span>
      </Link>

      {/* Previous date button */}
      <Link
        className=" btn-link md:order-first"
        href={`${pathname}?${setUrlSearchParams(getWeek(week.startDate, -7))}`}
      >
        <FaChevronLeft />
        <span className="">Prev</span>
      </Link>

      {/* Next button */}
      <Link
        className="btn-link col-start-[-2]"
        href={`${pathname}?${setUrlSearchParams(
          getWeek(new Date(week.startDate), 7)
        )}`}
      >
        <span className="">Next</span>
        <FaChevronRight />
      </Link>
    </div>
  );
}

export default WeekPicker;
