"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Bookable, Booking, Week } from "../../lib/types-definitions";
import {
  generateGridData,
  transformBookings as getTransformedBookings,
} from "../../lib/grid-builder";
import clsx from "clsx";

export default function BookingsGrid({
  bookings,
  bookable,
  week,
  setBooking,
  booking,
}: {
  bookings: Booking[];
  bookable: Bookable;
  week: Week;
  setBooking: Dispatch<SetStateAction<null>>;
  booking: Booking;
}) {
  //Generates grid from bookable and selected week
  const { gridData, sessions, dates } = generateGridData(
    bookable,
    week.startDate
  );

  const transformedBookings = getTransformedBookings(bookings);

  // console.log("Transformed:", transformedBookings);
  // console.log("Bookings: ", bookings);

  function Cell({
    session,
    date,
  }: {
    session: string;
    date: string;
    index: number;
  }) {
    let isSelected = booking?.date === date && booking?.session == session;

    return (
      <td
        className={clsx(
          "cursor-pointer",
          { "bg-cyan-600 text-white": isSelected },
          { "bg-white": !isSelected }
        )}
        onClick={() => {
          setBooking(transformedBookings[session][date]);
        }}
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
