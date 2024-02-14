import React, { Suspense } from "react";
import BookingsGrid from "./bookings-grid";
import { getAllBookables, getAllBookings } from "../lib/api";
import BookablesList from "./bookables-list";
import PageLoader from "../loading";
import BookingsPageWrapper from "./bookings-page-wrapper";

async function BookingsLayoutPage({ children }: { children: React.ReactNode }) {
  const bookables = await getAllBookables();
  // const bookings = await getAllBookings();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 justify-between mt-10">
      <BookablesList bookables={bookables} />
      {children}
    </div>
  );
}

export default BookingsLayoutPage;
