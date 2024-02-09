import Logo from "./Logo";
import React from "react";
import { NavLinks } from "./nav-links";

const Header = () => {
  return (
    <header className="text-white bg-accent-800 flex flex-col items-center justify-center">
      <div className="container px-4 w-full flex flex-col items-center sm:flex-row sm:justify-between my-6 gap-y-7">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
};
export default Header;
