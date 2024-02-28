"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDoorOpen, FaCalendarDays, FaUsers } from "react-icons/fa6";
import { getWeek, shortISODate } from "../lib/date-wrangler";

export function NavLinks() {
  const pathName = usePathname();
  console.log("pathname", pathName);

  let urlSearchParams = new URLSearchParams();
  urlSearchParams.set("bookableId", "1");
  // urlSearchParams.set("date_gte", shortISODate(getWeek(new Date()).startDate));
  // urlSearchParams.set("date_lte", shortISODate(getWeek(new Date()).endDate));

  const links = [
    {
      title: "Bookings",
      href: `/bookings?${urlSearchParams.toString()}`,
      // href: `/bookings/1`,
      icon: <FaCalendarDays />,
    },
    {
      title: "Bookables",
      href: `/bookables?${urlSearchParams.toString()}`,
      icon: <FaDoorOpen />,
    },
    { title: "Users", href: "/users", icon: <FaUsers /> },
  ];

  const navLinks = links.map((link, index) => {
    const LinkIcon = link.icon;
    const linkText = link.title.toLowerCase();
    return (
      <Link
        href={link.href}
        className={clsx(
          "max-sm:text-xs whitespace-nowrap w-[5rem] sm:w-36 sm:min-w-28 flex justify-center items-center border px-2 py-1 rounded-3xl flex-col  sm:flex-row gap-1",
          { " border-accent-100": pathName.includes(linkText) },
          { " border-accent-700 ": !pathName.includes(linkText) }
        )}
        key={index}
      >
        {LinkIcon}
        {link.title}
      </Link>
    );
  });
  return <nav className="flex gap-x-2">{navLinks}</nav>;
}
