"use client";

import { Bookable } from "../lib/types-definitions";
import {
  useRouter,
  useParams,
  useSearchParams,
  redirect,
} from "next/navigation";

import clsx from "clsx";

function BookablesList({ bookables }: { bookables: Bookable[] }) {
  const router = useRouter();

  const params_ = useSearchParams();
  const params = new URLSearchParams(params_);

  const id = Number(params.get("bookableId")) || 1;

  const groups = Array.from(new Set(bookables.map((b) => b.group)));
  const bookable = bookables.find((b) => b.id == id);
  const group = bookable?.group;

  //State values
  // const [group, setGroup] = useState(groups[0]);
  // const [bookableIndex, setBookableIndex] = useState(0);

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  function handleChangeGroup(e: React.ChangeEvent<HTMLSelectElement>) {
    // setGroup(e.target.value);
    // setBookableIndex(0);

    const bookablesInSelectedGroup = bookables.filter(
      (b) => b.group === e.target.value
    );
    router.push(`/bookings?bookableId=${bookablesInSelectedGroup[0].id}`);
  }

  function handleChangeBookable(id: number) {
    // setBookableIndex(id);
    params.set("bookableId", id.toString());
    router.push(`/bookings?${params.toString()}`);
    // redirect(`/bookings?bookableId=${id}`);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="group-selector">
        <select
          name="group"
          id="group"
          className={`py-1 px-2 outline border-none outline-1 rounded-sm bg-white`}
          onChange={(e) => handleChangeGroup(e)}
          value={group}
        >
          {groups.map((g, i) => (
            <option key={i}>{g}</option>
          ))}
        </select>
      </div>
      <ul className="mt-6 w-full flex flex-col gap-2 bookables-list">
        {bookablesInGroup.map((b, i) => {
          return (
            <li
              className={`${clsx(
                "text-center rounded-full px-2 py-1 border border-gray-600",
                { "bg-accent-800 text-white": b.id === id },
                { "text-gray-700 bg-white": b.id !== id }
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
  );
}

export default BookablesList;
