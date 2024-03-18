"use client";
import React, { useState, useTransition } from "react";
import {
  FaCalendarCheck,
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { getWeek, shortISODate } from "../../lib/date-wrangler";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Week } from "../../lib/types-definitions";
import { useBookingsSearchParams } from "../../lib/custom-hooks";
import Link from "next/link";

function WeekPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const startDate = searchParams.get("date_gte") || "2023-06-24";
  const week = getWeek(new Date(startDate));

  //state
  const [dateInputText, setDateInputText] = useState("2023-06-24");

  function updateDateSearchParams(week: Week) {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("date_gte", shortISODate(week.startDate));
    urlSearchParams.set("date_lte", shortISODate(week.endDate));
    return urlSearchParams.toString();
  }

  //event handlers
  function handleOnNextClick() {
    startTransition(() => {
      router.push(
        `${pathname}?${updateDateSearchParams(
          getWeek(new Date(week.startDate), 7)
        )}`
      );
    });
  }
  function handleOnGoClick() {
    startTransition(() => {
      router.push(
        `${pathname}?${updateDateSearchParams(
          getWeek(new Date(dateInputText))
        )}`
      );
    });
  }
  function handleOnPrevClick() {
    startTransition(() => {
      router.push(
        `${pathname}?${updateDateSearchParams(
          getWeek(new Date(week.startDate), -7)
        )}`
      );
    });
  }
  function handleOnTodayClick() {
    startTransition(() => {
      router.push(`${pathname}?${updateDateSearchParams(getWeek(new Date()))}`);
    });
  }

  return (
    <div
      data-pending={pending ? "week" : undefined}
      className="week-picker grid grid-cols-[repeat(4,minmax(auto,1fr))] md:grid-cols-[repeat(6,minmax(auto,1fr))] gap-2 "
    >
      {/* Today's date button */}

      <button className="btn-link" onClick={handleOnTodayClick}>
        Today
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
      <button className="btn-link" onClick={handleOnGoClick}>
        <FaCalendarCheck />
        <span className="">Go</span>
      </button>

      {/* Previous date button */}
      <button className=" btn-link md:order-first" onClick={handleOnPrevClick}>
        <FaChevronLeft />
        <span className="">Prev</span>
      </button>

      {/* Next button */}

      <button className="btn-link col-start-[-2]" onClick={handleOnNextClick}>
        <span className="">Next</span>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default WeekPicker;
