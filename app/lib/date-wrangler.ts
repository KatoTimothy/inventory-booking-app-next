import { Week } from "./types-definitions";

//Adds/Subtracts days given date
export function addDays(date: string | Date, days: number) {
  const dateClone = new Date(date);
  dateClone.setDate(dateClone.getDate() + days);
  return dateClone;
}

//generate a week object given base date and offset value
export function getWeek(date: Date, offset: number = 0): Week {
  const baseDate = addDays(date, offset);
  const day = baseDate.getDay();
  const startDate = addDays(baseDate, -day);
  const endDate = addDays(baseDate, 6 - day);
  return { baseDate, startDate, endDate };
}

//Generates a short ISO date string e.g. '2024-12-02
export function shortISODate(date: Date) {
  return date.toISOString().split("T")[0];
}
