"use client";
import { useState } from "react";
import { Bookable } from "../../lib/types-definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import clsx from "clsx";
import { useTransition, useOptimistic } from "react";
import Spinner from "../Spinner";

function BookablesList({ bookables }: BookablesListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const bookableId = Number(searchParams.get("bookableId")) || bookables[0].id;

  //deferred states
  const [optimisticBookables] = useOptimistic(bookables);
  const [optimisticBookableId, setOptimisticBookableId] =
    useOptimistic(bookableId);

  const bookable = optimisticBookables.find(
    (b) => b.id === optimisticBookableId
  );

  const groups = Array.from(new Set(optimisticBookables.map((b) => b.group)));
  const bookablesInGroup = optimisticBookables.filter(
    (b) => b.group === bookable?.group
  );

  //UI helpers
  function updateBookableParamsUrl(bookableId: number) {
    if (pathname.includes("bookables")) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.set("bookableId", bookableId.toString());
      return `${pathname}?${urlSearchParams.toString()}`;
    } else {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set("bookableId", bookableId.toString());
      return `${pathname}?${urlSearchParams.toString()}`;
    }
  }

  // event handlers
  function handleChangeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedGroup = e.target.value;

    const getFirstBookableInSelectedGroup = () =>
      optimisticBookables.filter((b) => b.group === selectedGroup)[0];

    startTransition(() => {
      setOptimisticBookableId(getFirstBookableInSelectedGroup().id);
      router.replace(
        updateBookableParamsUrl(getFirstBookableInSelectedGroup().id)
      );
    });
  }

  function handleOnClickBookable(id: number) {
    startTransition(() => {
      setOptimisticBookableId(id);
      router.replace(updateBookableParamsUrl(id));
    });
  }

  // UI
  return (
    // <div className="">
    <div className="flex flex-col items-center flex-1">
      <div className="group-selector">
        <select
          name="group"
          id="group"
          className={`py-1 px-2 outline border-none outline-1 rounded-sm bg-white`}
          onChange={(e) => handleChangeGroup(e)}
          defaultValue={bookable?.group}
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
              className={` ${clsx(
                "text-center rounded-full px-2 py-1 border border-gray-600 cursor-pointer inline-flex gap-2 justify-center items-center",
                { "bg-accent-800 text-white": b.id === optimisticBookableId },
                { "text-gray-700 bg-white": b.id !== optimisticBookableId }
              )}`}
              key={i}
              onClick={() => handleOnClickBookable(b.id)}
            >
              {b.title}
              {pending && b.id === optimisticBookableId ? (
                <span className="text-sm">
                  <Spinner />
                </span>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>
  );
}
type BookablesListProps = {
  bookables: Bookable[];
};

export default BookablesList;
