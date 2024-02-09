"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDoorOpen, FaCalendarDays, FaUsers } from "react-icons/fa6";

export function NavLinks() {
  const links = [
    {
      title: "Bookings",
      href: "/bookings?bookableId=1",
      icon: <FaCalendarDays />,
    },
    { title: "Bookables", href: "/bookables/1", icon: <FaDoorOpen /> },
    { title: "Users", href: "/users", icon: <FaUsers /> },
  ];

  const pathName = usePathname();
  console.log("pathname", pathName);

  const navLinks = links.map((link, index) => {
    const LinkIcon = link.icon;
    const linkText = link.title.toLowerCase();
    return (
      <Link
        href={link.href}
        className={clsx(
          "max-sm:text-sm max-sm:w-24 sm:w-36 sm:min-w-28 flex justify-center items-center border px-2 py-1 rounded-full flex-col  sm:flex-row gap-1",
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
