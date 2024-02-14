"use client";

import { Booking } from "../lib/types-definitions";

import WeekPicker from "./week-picker";
import BookingsGrid from "./bookings-grid";
import { getAllBookings } from "../lib/api";

async function BookingsPageWrapper() {
  const bookings = await getAllBookings();

  return (
    <div className="bookings-grid">
      <BookingsGrid bookings={bookings} />
    </div>
  );
}

export default BookingsPageWrapper;
