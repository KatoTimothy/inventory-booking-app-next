"use client";
import React from "react";
import { Bookable, Booking, Week } from "../lib/types-definitions";
import {
  generateGridData,
  transformBookings as getTransformedBookings,
} from "../lib/grid-builder";
import clsx from "clsx";

export default function BookingsGrid({
  bookings,
  bookable,
  week,
}: {
  bookings: Booking[];
  bookable: Bookable;
  week: Week;
}) {
  //Generates grid from bookable and selected week
  const { gridData, sessions, dates } = generateGridData(
    bookable,
    week.startDate
  );

  const transformedBookings = getTransformedBookings(bookings);

  console.log("Transformed:", transformedBookings);
  console.log("Bookings: ", bookings);

  function Cell({ session, date }: { session: string; date: string }) {
    let active =
      transformedBookings[session]?.[date]?.date ===
      gridData[session][date].date;
    console.log("active", active);
    return (
      <td
        className={clsx(
          "cursor-pointer bg-cream-50",
          // { "bg-cream-50": !active },
          { "text-white bg-cyan-700": active }
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
      <table className="w-full sm:table-auto">
        <thead>
          <tr className="">
            <th></th>
            {dates.map((d, i) => (
              <th key={i}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sessions.map((s, i) => (
            <tr key={i}>
              <th className="">{s}</th>
              {/* Table Body data cells */}
              {dates.map((d, i) => (
                <Cell key={i} session={s} date={d} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
