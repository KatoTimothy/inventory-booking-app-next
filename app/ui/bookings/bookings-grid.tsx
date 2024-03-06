"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Bookable, Booking, Week } from "../../lib/types-definitions";
import {
  generateGridData,
  transformBookings as getTransformedBookings,
} from "../../lib/grid-builder";
import clsx from "clsx";
import { useBookingsSearchParams } from "@/app/lib/custom-hooks";

export default function BookingsGrid({
  bookings,
  bookables,
}: BookingsGridProps) {
  //reads searchParams and returns data associated with them
  const { bookable, week } = useBookingsSearchParams(bookables);

  //read data associated with current bookable and week
  const { gridData, sessions, dates } = generateGridData(
    bookable,
    week.startDate
  );

  //transformed booking
  const transformedBookings = getTransformedBookings(bookings);

  function Cell({
    session,
    date,
  }: {
    session: string;
    date: string;
    index: number;
  }) {
    // let isSelected = booking?.date === date && booking?.session == session;

    return (
      <td
        className={clsx(
          "cursor-pointer bg-white text-gray-700"
          // { "bg-white": !isSelected }
        )}
      >
        {transformedBookings[session]?.[date]?.title ||
          gridData[session][date].title}
      </td>
    );
  }

  console.log(gridData);

  return (
    <div className="bookings-grid mt-5">
      <table className="w-full">
        <thead>
          <tr className="">
            <th></th>
            {dates.map((d, i) => (
              <th key={i}>{new Date(d).toDateString()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sessions.map((s, i) => (
            <tr key={i}>
              <th className="">{s}</th>
              {/* Table Body data cells */}
              {dates.map((d, i) => (
                <Cell key={i} session={s} date={d} index={i} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type BookingsGridProps = {
  bookables: Bookable[];
  bookings: Booking[];
};
