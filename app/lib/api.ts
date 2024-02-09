import data from "@/app/data.json";
import { Bookable, Booking } from "./types-definitions";
import { rejects } from "assert";
import { resolve } from "path";

/**
 * These functions mimick fetching from API
 * by delaying reading static data for 3seconds*/

export async function getAllBookables() {
  try {
    await delay();
    return data.bookables as Bookable[];
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
    return data.bookings.find((b) => b.id == id);
  } catch (error) {
    throw new Error("Oops No such bookable found..");
  }
}

export async function getAllBookings() {
  try {
    //delay reading bookings data by 3seconds
    await delay();
    return data.bookings as Booking[];
  } catch (error) {
    throw new Error("Oops! Failed to fetch booking...");
  }
}

export async function findBookableById(id: number) {
  try {
    await delay();
    return data.bookables.find((b) => b.id == id) as Bookable;
  } catch (error) {
    throw new Error("Ooops! No such bookable found");
  }
}

export async function findBookablesByGroup(group: string) {
  try {
    await delay();
    return data.bookables.filter((b) => b.group === group) as Bookable[];
  } catch (error) {
    throw new Error(
      `No bookables found belonging to specified group name: ${group}`
    );
  }
}
