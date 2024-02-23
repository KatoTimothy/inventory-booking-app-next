import BookingsGrid from "./bookings-grid";
import { getAllBookings } from "../lib/api";
import { Bookable, Booking } from "../lib/types-definitions";

async function BookingsPageWrapper({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="bookings-grid">
      <BookingsGrid bookings={bookings} />
    </div>
  );
}

export default BookingsPageWrapper;
