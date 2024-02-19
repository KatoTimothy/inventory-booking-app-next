export type Bookable = {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: number[];
  days: number[];
};

export type Booking = {
  session: string;
  date: string;
  bookableId: number;
  title: string;
  bookerId: number;
  id: number;
};

export type User = {
  id: number;
  name: string;
  image: string;
  title: string;
  notes: string;
};

export type GridBooking = {
  [session: string]: {
    [date: string]: {
      session: string;
      date: string;
      title: string;
      bookableId: number;
    };
  };
};
export type GridSession = {
  [date: string]: {
    session: string;
    date: string;
    title: string;
    bookableId: number;
  };
};
