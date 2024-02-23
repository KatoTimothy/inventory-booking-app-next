import db from "@/app/data.json";
import { Bookable, Booking } from "./types-definitions";

/**
 * These functions mimick fetching from an API
 * by delaying reading static data for 3seconds*/

export async function getAllBookables() {
  try {
    await delay();
    return db.bookables as Bookable[];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching bookables");
  }
}

async function delay(time: number = 3000) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function findBookingById(id: number) {
  try {
    await delay();
    return db.bookings.find((b) => b.id == id);
  } catch (error) {
    throw new Error("Oops No such bookable found..");
  }
}

export async function getAllBookings() {
  try {
    //delay reading bookings data by 3seconds
    await delay();
    return db.bookings as Booking[];
  } catch (error) {
    throw new Error("Oops! Failed to fetch booking...");
  }
}

export async function getGridBookings(
  bookableId: number,
  startDate: string,
  endDate: string
) {
  await delay();
  try {
    return db.bookings.filter(
      // (b) => b.bookableId == bookableId
      (b) =>
        b.date >= startDate && b.date <= endDate && bookableId === b.bookableId
    );
  } catch (error) {
    throw Error("Error occured during data fetch...");
  }
}

export async function findBookableById(id: number) {
  try {
    await delay();
    return db.bookables.find((b) => b.id == id) as Bookable;
  } catch (error) {
    throw new Error("Ooops! No such bookable found");
  }
}

export async function findBookablesByGroup(group: string) {
  try {
    await delay();
    return db.bookables.filter((b) => b.group === group) as Bookable[];
  } catch (error) {
    throw new Error(
      `No bookables found belonging to specified group name: ${group}`
    );
  }
}
