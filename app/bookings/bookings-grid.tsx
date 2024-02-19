"use client";
import React from "react";
import { Booking } from "../lib/types-definitions";
import { useParams, useSearchParams } from "next/navigation";

function BookingsGrid({ bookings }: { bookings: Booking[] }) {
  // Read search params
  const searchParams = useSearchParams();
  const bookableId = Number(
    searchParams.get("bookableId") || bookings[0].bookableId
  );

  const booking = bookings.find((b) => b.bookableId === bookableId);
  {
    console.log(booking?.title);
  }
  return (
    <div className="bookings-grid">
      <p>
        Activity: {""}
        {booking?.title
          ? booking?.title
          : "This item isn't booked for any activity yet!"}
      </p>
      <p>
        Session:{" "}
        {booking?.session
          ? booking?.session
          : `This this item isn't booked for any session yet!`}
      </p>
    </div>
  );
}

export default BookingsGrid;
