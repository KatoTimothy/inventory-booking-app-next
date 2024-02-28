"use client";

import BookingsGrid from "./bookings-grid";
import { Bookable, Booking } from "../../lib/types-definitions";
import { useBookingsSearchParams } from "@/app/lib/custom-hooks";
import { useState } from "react";

function BookingsGridWrapper({
  bookings,
  bookables,
}: {
  bookings: Booking[];
  bookables: Bookable[];
}) {
  //state
  const [booking, setBooking] = useState(null);
  //Read params
  const { week, bookable } = useBookingsSearchParams(bookables);
  console.log("booking", booking);
  return (
    <div className="bookings-grid">
      <BookingsGrid
        bookings={bookings}
        week={week}
        bookable={bookable}
        booking={booking}
        setBooking={setBooking}
      />
    </div>
  );
}

export default BookingsGridWrapper;
