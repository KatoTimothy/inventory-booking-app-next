import React from "react";
import { getAllBookables, getAllBookings } from "../lib/api";
import BookablesList from "../ui/bookables/bookables-list";
import WeekPicker from "../ui/bookings/week-picker";
import BookingsGridWrapper from "../ui/bookings/booking-grid-wrapper";

async function BookingsPage({
  searchParams,
}: {
  searchParams: { bookableId: string; date_gte: string };
}) {
  //fetch data
  const [bookings, bookables] = await Promise.all([
    getAllBookings(),
    getAllBookables(),
  ]);

  //read params
  const bookableId = parseInt(searchParams.bookableId, 10);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 justify-between mt-10">
      <BookablesList bookables={bookables} />
      <div className="bookings-section">
        <WeekPicker />
        <BookingsGridWrapper bookings={bookings} bookables={bookables} />
      </div>
    </div>
  );
}

export default BookingsPage;
