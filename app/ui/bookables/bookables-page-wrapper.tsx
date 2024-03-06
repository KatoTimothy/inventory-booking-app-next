"use client";

import { useOptimistic, useTransition } from "react";
import BookableDetails from "./bookable-details";
import BookablesList from "./bookables-list";
import { Bookable } from "@/app/lib/types-definitions";

function BookablesPageWrapper({ bookables, bookable }: BookablesWrapperProps) {
  const [pending] = useTransition();
  const [optimisticBookables] = useOptimistic(bookables);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 mt-10">
      <BookablesList
        bookables={optimisticBookables}
        bookable={optimisticBookable}
      />
      <BookableDetails bookable={optimisticBookable} />
    </div>
  );
}

type BookablesWrapperProps = {
  bookables: Bookable[];
  bookable: Bookable;
};
export default BookablesPageWrapper;
