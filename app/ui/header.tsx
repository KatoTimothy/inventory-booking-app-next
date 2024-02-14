import Logo from "./Logo";
import React from "react";
import { NavLinks } from "./nav-links";

const Header = () => {
  return (
    <header className="text-white bg-accent-800 px-4 min-h-[5rem] flex flex-col justify-center items-center">
      {/* <div className="w-full container mx-auto my-4"> */}
      <div className="container w-full px-0 mx-auto my-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-y-7">
        <Logo />
        <NavLinks />
      </div>
      {/* </div> */}
    </header>
  );
};
export default Header;
