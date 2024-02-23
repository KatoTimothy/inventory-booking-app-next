import {
  ReadonlyURLSearchParams,
  useParams,
  useSearchParams,
} from "next/navigation";
import { getWeek, shortISODate } from "./date-wrangler";
import { Bookable } from "./types-definitions";

//Reads search parameters for start date value and returns matching week object
export function useBookingsSearchParams(searchParams: ReadonlyURLSearchParams) {
  const startDate = searchParams.get("date_gte") || shortISODate(new Date());
  console.log(getWeek(new Date(startDate)));
  return getWeek(new Date(startDate));
}

//Reads reads bookableId from param value and returns bookable that it matches
export function useBookableListSearchParams(bookables: Bookable[]) {
  const searchParams = useSearchParams();
  const bookableId = Number(searchParams.get("bookableId")) || bookables[0].id;

  return bookables.find((b) => b.id === bookableId);
}

export function useBookableListParams(bookables: Bookable[]) {
  const searchParams = useParams();
  const bookableId = Number(searchParams.bookableId) || bookables[0].id;

  return bookables.find((b) => b.id === bookableId);
}
