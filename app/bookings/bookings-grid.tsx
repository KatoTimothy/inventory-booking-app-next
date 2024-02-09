
import React, { Suspense } from "react";
import { getAllBookables, getAllBookings } from "../lib/api";
import { Booking, Bookable } from "../lib/types-definitions";
import { useSearchParams } from "next/navigation";

 async function BookingsGrid() {
  const bookings = await getAllBookings()
  const bookables = await getAllBookables();

  return <div className="">Bookings Grid Item: {bookings[0]?.title}</div>;
}

export default BookingsGrid;
