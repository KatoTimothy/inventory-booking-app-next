import {
  Bookable,
  Booking,
  GridBooking,
  GridSession,
} from "./types-definitions";
import staticData from "./static.json";
import { addDays, shortISODate } from "./date-wrangler";

const { sessions, days } = staticData;

//generates data required to draw the table of session and dates
export const generateGridData = (bookable: Bookable, weekStartDate: Date) => {
  const bookableSessions = bookable.sessions.map((s) => sessions[s]);
  const bookableDates = bookable.days.map((d) =>
    shortISODate(addDays(shortISODate(weekStartDate), d))
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

export function transformBookings(bookings: Booking[]) {
  return bookings.reduce((transformedBookings, booking) => {
    const { session, date } = booking;
    if (!transformedBookings[session]) {
      transformedBookings[session] = {};
    }

    transformedBookings[session][date] = booking as Booking;
    // transformedBookings[session][date] = {
    //   session,
    //   date,
    //   bookableId: booking.bookableId,
    //   title: booking.title,
    // };

    return transformedBookings as GridBooking;
  }, {} as any);
}
