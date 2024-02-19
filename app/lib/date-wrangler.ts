//offsets given date by number of days
export function offSetDate(date: string | Date, offset: number) {
  const dateClone = new Date(date);
  dateClone.setDate(dateClone.getDate() + offset);
  return dateClone;
}

//gets start and end dates of particular week given an arbitrary date
export function getWeek(date: Date, offset: number = 0) {
  const targetDate = offSetDate(date, offset);
  const startDate = offSetDate(date, -targetDate.getDay());
  const endDate = offSetDate(date, 6 - targetDate.getDay());
  return { targetDate, startDate, endDate };
}

//Generates a short ISO date string e.g. '2024-12-02
export function shortISODate(date: Date) {
  return date.toISOString().split("T")[0];
}
