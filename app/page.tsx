import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default async function HomePage() {
  return (
    <div className="py-6">
      <h1 className="text-accent-800 text-3xl font-extrabold">
        Inventory Booking Management app
      </h1>
      <p className="my-3">
        This minimal web app that enables users to manage Inventory Bookings of
        a company.
      </p>
      <Link
        href="/bookings"
        className={
          " bg-accent-700 text-white whitespace-nowrap gap-x-2 inline-flex justify-center items-center border px-4 py-1 rounded-3xl"
        }
      >
        View Bookings
        <FaArrowRight />
      </Link>
    </div>
  );
}
