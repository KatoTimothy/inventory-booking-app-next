import React from "react";
import { getAllBookables } from "../lib/api";
import BookablesList from "./bookables-list";
import WeekPicker from "./week-picker";

async function BookingsPage({ children }: { children: React.ReactNode }) {
  const bookables = await getAllBookables();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 justify-between mt-10">
      <BookablesList bookables={bookables} />
      <div className="bookings-section">
        <WeekPicker />
        {children}
      </div>
    </div>
  );
}

export default BookingsPage;
