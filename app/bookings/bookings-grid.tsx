"use client";
import React from "react";
import { Booking } from "../lib/types-definitions";
import { useParams } from "next/navigation";

function BookingsGrid({ bookings }: { bookings: Booking[] }) {
  // Read search params
  const params = useParams();
  const bookableId = Number(params.id) || bookings[0].bookableId;

  const booking = bookings.find((b) => b.bookableId === bookableId);
  {
    console.log(booking?.title);
  }
  return (
    <div className="bookings-grid">
      <p>Booking: {booking?.title}</p>
      <p>Session: {booking?.session}</p>
    </div>
  );
}

export default BookingsGrid;
