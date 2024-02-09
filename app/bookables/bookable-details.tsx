"use client";

import React, { useState } from "react";
import { Bookable } from "../lib/types-definitions";
import staticData from "@/app/lib/static.json";
import { FaChair, FaHandDots } from "react-icons/fa6";

const { days } = staticData;

function BookableDetails({ bookable }: { bookable: Bookable }) {
  const [toggleDetails, setToggleDetails] = useState(true);

  function handleToggleDetails() {
    setToggleDetails((s) => !s);
  }

  return (
    <div className="bookable details bg-teal-600 text-white">
      <div className="border-b-8 border-white border-spacing-4 bg-accent-800 item-header flex flex-wrap gap-y-4 justify-between items-center p-4">
        <div className="text-[24px] font-bold">{bookable.title}</div>
        <span className="controls">
          <input
            className="mr-1"
            type="checkbox"
            name=""
            checked={toggleDetails}
            id="toggle-details"
            onChange={handleToggleDetails}
          />
          <label htmlFor="toggle-details">Show details</label>
        </span>
      </div>

      <div className="item-details p-4">
        <p className="mb-4">{bookable.notes}</p>

        {toggleDetails && (
          <>
            <h1 className="border-b font-bold text-[16px] pb-3 mb-2">
              Availability
            </h1>
            <ul className="p-4">
              {bookable.days.map((d) => (
                <li className="list-disc">{days[d]}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default BookableDetails;
