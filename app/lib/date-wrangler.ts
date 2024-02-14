//offsets given date by number of days
export function offSetDate(date: string, offset: number) {
  const dateClone = new Date(date);
  dateClone.setDate(dateClone.getDate() + offset);
  return dateClone;
}

//gets start and end dates of particular week given an arbitrary date
export function getWeek(date: string, offset: number = 0) {
  const day = offSetDate(date, offset).getDay();
  const targetDate = offSetDate(date, 0);
  const startDate = offSetDate(date, -day);
  const endDate = offSetDate(date, 6 - targetDate.getDay());
  return { targetDate, startDate, endDate };
}

//Generates a short ISO date string e.g. '2024-12-02
export function shortISODate(date: Date) {
  return date.toISOString().split("T")[0];
}

