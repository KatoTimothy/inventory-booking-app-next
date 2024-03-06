import {
  useParams,
  useSearchParams,
} from "next/navigation";
import { getWeek, shortISODate } from "./date-wrangler";
import { Bookable } from "./types-definitions";

//Reads search parameters for start date value
export function useBookingsSearchParams(bookables: Bookable[]) {
  //read search parameters
  const searchParams = useSearchParams();
  const startDate =
    searchParams.get("date_gte") || shortISODate(new Date("2023-06-24"));
  const bookableId = Number(searchParams.get("bookableId"));

  const bookable = bookables.find((b) => b.id === bookableId) || bookables[0];
  const week = getWeek(new Date(startDate));

  return {
    bookable,
    week,
  };
}

//Reads reads bookableId from param value and returns bookable that it matches
export function useBookablesSearchParams(bookables: Bookable[]) {
  const searchParams = useSearchParams();
  const bookableId = Number(searchParams.get("bookableId")) || bookables[0].id;

  return bookables.find((b) => b.id === bookableId) || bookables[0];
}

//Reads search params named bookableId and returns matching bookable
export function useBookablesParams(bookables: Bookable[]) {
  const params = useParams();
  const bookableId = Number(params.bookableId);

  return bookables.find((b) => b.id === bookableId) || bookables[0];
}
