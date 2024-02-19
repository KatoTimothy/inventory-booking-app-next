"use client";

import { Bookable } from "../lib/types-definitions";
import { useRouter, useParams, useSearchParams } from "next/navigation";

import clsx from "clsx";

function BookablesList({ bookables }: { bookables: Bookable[] }) {
  // Read search params
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);

  const bookableId = Number(searchParams.get("bookableId") || bookables[0].id);

  const router = useRouter();

  // bookable state
  const bookable = bookables.find((b) => b.id == bookableId);
  const group = bookable?.group;
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  // All unique group names
  const groups = Array.from(new Set(bookables.map((b) => b.group)));

  // Event handlers
  function handleChangeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    const bookablesInSelectedGroup = bookables.filter(
      (b) => b.group === e.target.value
    );

    //get first bookable from the first group
    const firstBookable = bookablesInSelectedGroup[0];

    urlSearchParams.set("bookableId", firstBookable.id.toString());

    router.replace(`/bookings?${urlSearchParams.toString()}`);
  }

  function handleChangeBookable(id: number) {
    urlSearchParams.set("bookableId", id.toString());
    //navigate to new
    router.replace(`/bookings?${urlSearchParams.toString()}`);
  }

  return (
    // <div className="">
    <div className="flex flex-col items-center">
      <div className="group-selector">
        <select
          name="group"
          id="group"
          className={`py-1 px-2 outline border-none outline-1 rounded-sm bg-white`}
          onChange={(e) => handleChangeGroup(e)}
          defaultValue={group}
        >
          {groups.map((g, i) => (
            <option key={i}>{g}</option>
          ))}
        </select>
      </div>
      <ul className="mt-6 pb-2 w-full flex flex-row max-sm:overflow-x-auto sm:flex-col whitespace-nowrap gap-2 bookables-list">
        {bookablesInGroup.map((b, i) => {
          return (
            <li
              className={`${clsx(
                "text-center rounded-full px-2 py-1 border border-gray-600 cursor-pointer",
                { "bg-accent-800 text-white": b.id === bookableId },
                { "text-gray-700 bg-white": b.id !== bookableId }
              )}`}
              key={i}
              onClick={() => handleChangeBookable(b.id)}
            >
              {b.title}
            </li>
          );
        })}
      </ul>
    </div>
    // </div>
  );
}

export default BookablesList;
