import React, { Suspense } from "react";
import BookablesList from "./bookables-list";
import { getAllBookables } from "@/app/lib/api";

async function BookablesLayout({ children }: { children: React.ReactNode }) {
  const bookables = await getAllBookables();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 mt-10">
      <BookablesList bookables={bookables} />
      {children}
    </div>
  );
}

export default BookablesLayout;
