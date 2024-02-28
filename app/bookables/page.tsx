import React, { Suspense } from "react";
import BookablesList from "../ui/bookables/bookables-list";
import { getAllBookables } from "@/app/lib/api";
import BookableDetails from "../ui/bookables/bookable-details";

async function BookablesPage({
  searchParams,
}: {
  searchParams: { bookableId: string };
}) {
  const bookableId = parseInt(searchParams.bookableId, 10);
  const bookables = await getAllBookables();

  const bookable = bookables.find((b) => b.id === bookableId) || bookables[0];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 mt-10">
      <BookablesList bookables={bookables} />
      <BookableDetails bookable={bookable} />
    </div>
  );
}

export default BookablesPage;
