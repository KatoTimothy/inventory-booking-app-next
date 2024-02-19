import React, { Suspense } from "react";
import WeekPicker from "./week-picker";
import BookingsPageWrapper from "./bookings-page-wrapper";

async function BookingsHomePage({}) {
  return (
    <div className="bookings-grid">
      <WeekPicker />
      <BookingsPageWrapper />
    </div>
  );
}

export default BookingsHomePage;
