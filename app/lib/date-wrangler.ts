import { off } from "process";
import { Week } from "./types-definitions";

//offsets given date by number of days
export function offSetDate(date: string | Date, offset: number) {
  const dateClone = new Date(date);
  dateClone.setDate(dateClone.getDate() + offset);
  return dateClone;
}

//generate a week object given base date and offset value
export function getWeek(date: Date, offset: number = 0): Week {
  console.log(date);
  const baseDate = offSetDate(date, offset);
  const startDate = offSetDate(baseDate, -baseDate.getDay());
  const endDate = offSetDate(baseDate, 6 - baseDate.getDay());
  return { baseDate, startDate, endDate };
}

//Generates a short ISO date string e.g. '2024-12-02
export function shortISODate(date: Date) {
  return date.toISOString().split("T")[0];
}
