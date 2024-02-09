import React from "react";
import Spinner from "@/app/ui/Spinner";

function PageLoader() {
  return (
    <div className="flex items-center justify-center text-accent-800 text-[150%]">
      <Spinner />
    </div>
  );
}

export default PageLoader;
