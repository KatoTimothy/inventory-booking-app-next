import React from "react";
import {
  findBookableById,
  getAllBookings,
  findBookingById,
} from "@/app/lib/api";
import BookingsGrid from "../bookings-grid";
import { getWeek, shortISODate } from "@/app/lib/date-wrangler";

async function BookingsHomePage({
  params,
  searchParams,
}: {
  params: { bookableId: string };
  searchParams: { date_gte: string };
}) {
  const bookableId = parseInt(params.bookableId, 10) || 1;
  const startDate = searchParams.date_gte || "2023-06-24";

  const bookings = await getAllBookings();
  const bookable = await findBookableById(bookableId);
  const week = getWeek(new Date(startDate));

  console.log(bookings.length);

  return (
    <div className="bookings-grid">
      <BookingsGrid bookable={bookable} bookings={bookings} week={week} />
    </div>
  );
}

export default BookingsHomePage;
