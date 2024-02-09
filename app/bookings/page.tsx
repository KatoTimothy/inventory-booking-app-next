import React, { Suspense } from "react";
import BookingsGrid from "./bookings-grid";
import { getAllBookables } from "../lib/api";
import BookablesList from "./bookables-list";
import PageLoader from "../loading";

async function BookingsHomePage() {
  const bookables = await getAllBookables();

  return (
    <div className="grid grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-x-3 mt-10">
      <BookablesList bookables={bookables} />
      <Suspense fallback={<PageLoader />}>
        <BookingsGrid />
      </Suspense>
    </div>
  );
}

export default BookingsHomePage;
