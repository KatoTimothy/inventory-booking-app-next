import { Bookable, GridBooking, GridSession } from "./types-definitions";
import { sessions, days } from "./static.json";
import { offSetDate, shortISODate } from "./date-wrangler";


//generates data required to draw the table of session and dates
export const generateGridData = (bookable: Bookable, weekStartDate: Date) => {
  const bookableSessions = bookable.sessions.map((s) => sessions[s]);
  const bookableDates = bookable.days.map((d) =>
    shortISODate(offSetDate(shortISODate(weekStartDate), d))
  );

  let gridData = {} as any;

  bookableSessions.forEach((session) => {
    gridData[session] = {};

    bookableDates.forEach((date) => {
      gridData[session][date] = {
        session,
        date,
        title: "",
        bookableId: bookable.id,
      };
    });
  });
  return {
    gridData: gridData as GridBooking,
    sessions: bookableSessions,
    dates: bookableDates,
  };
};
