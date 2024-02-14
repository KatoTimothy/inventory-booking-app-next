"use client";

import { Bookable } from "../lib/types-definitions";
import { useRouter, useParams, useSearchParams } from "next/navigation";

import clsx from "clsx";

function BookablesList({ bookables }: { bookables: Bookable[] }) {
  const router = useRouter();

  const params = useParams();
  const bookableId = Number(params.id) || bookables[0].id;

  const bookable = bookables.find((b) => b.id == bookableId);
  const group = bookable?.group;
  const groups = Array.from(new Set(bookables.map((b) => b.group)));
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  // event handlers
  function handleChangeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedGroup = e.target.value;
    const bookablesInSelectedGroup = bookables.filter(
      (b) => b.group === selectedGroup
    );
    router.replace(`/bookables/${bookablesInSelectedGroup[0].id}`);
  }

  function handleChangeBookable(id: number) {
    router.replace(`/bookables/${id}`);
  }

  return (
    // <div className="">
    <div className="flex flex-col items-center flex-1">
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
      {/* <div className="w-full"> */}
      <ul className="w-full mt-6 flex flex-row sm:flex-col pb-2 max-sm:overflow-x-auto max-sm:scroll-m-8 whitespace-nowrap gap-2 bookables-list ">
        {bookablesInGroup.map((b, i) => {
          return (
            <li
              className={`${clsx(
                "text-center rounded-full px-2 py-1 border border-gray-600 cursor-pointer",
                { "bg-accent-800 text-white": b.id === bookable?.id },
                { "text-gray-700 bg-white": b.id !== bookable?.id }
              )}`}
              key={i}
              onClick={() => handleChangeBookable(b.id)}
            >
              {b.title}
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>
  );
}

export default BookablesList;
