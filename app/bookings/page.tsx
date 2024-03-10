import React from "react";
import { getAllBookables, getAllBookings } from "../lib/api";
import BookablesList from "../ui/bookables/bookables-list";
import WeekPicker from "../ui/bookings/week-picker";
import BookingsGrid from "../ui/bookings/bookings-grid";

async function BookingsPage() {
  //fetch data
  const [bookings, bookables] = await Promise.all([
    getAllBookings(),
    getAllBookables(),
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 justify-between mt-10 group">
      <BookablesList bookables={bookables} />
      <div className="bookings-section">
        <WeekPicker />
        <div className="bookings-grid group-has-[[data-pending=bookable]]:animate-pulse">
          <BookingsGrid bookings={bookings} bookables={bookables} />
        </div>
      </div>
    </div>
  );
}
export default BookingsPage;
