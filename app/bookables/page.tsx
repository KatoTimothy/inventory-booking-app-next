import { getAllBookables, findBookableById } from "@/app/lib/api";
import BookableDetails from "../ui/bookables/bookable-details";
import BookablesList from "../ui/bookables/bookables-list";

async function BookablesPage() {
  //fetch page data
  const bookables = await getAllBookables();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr),minmax(0,3fr)] gap-8 mt-10">
      <BookablesList bookables={bookables} />
      <BookableDetails bookables={bookables} />
    </div>
  );
}
type BookablesPageSearchParams = {
  searchParams: {
    bookableId: string;
    date_lte: string;
    date_gte: string;
  };
};

export default BookablesPage;
