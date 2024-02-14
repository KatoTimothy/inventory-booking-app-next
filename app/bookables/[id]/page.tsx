import React from "react";
import { findBookableById } from "@/app/lib/api";
import BookableDetails from "../bookable-details";

async function BookableDetailsPage({ params }: { params: { id: number } }) {
  const id = params.id || 1;
  const bookable = await findBookableById(id);

  return <BookableDetails bookable={bookable} />;
}

export default BookableDetailsPage;
