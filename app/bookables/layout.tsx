import React, { Suspense } from "react";
import BookablesList from "./bookables-list";
import { getAllBookables } from "@/app/lib/api";

async function BookablesLayout({ children }: { children: React.ReactNode }) {
  const bookables = await getAllBookables();

  return (
    <div className="grid grid-cols-[minmax(0,2fr),minmax(0,3fr)] gap-x-3 mt-10">
      <BookablesList bookables={bookables} />
      {children}
    </div>
  );
}

export default BookablesLayout;
