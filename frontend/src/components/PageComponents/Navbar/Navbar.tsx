
import React from "react";
import Logo from "./Logo";
import ThemeToggleButton from "../../Providers/ThemeToggleButton";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[90%] rounded-lg fixed m-auto px-10 py-5 flex justify-between items-center z-10 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-border ">
        <Logo />
        <NavMenu viewport={"desktop"} />
        <div className="flex items-center ">
          <ThemeToggleButton />
          <div className="md:hidden">
          <Drawer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
