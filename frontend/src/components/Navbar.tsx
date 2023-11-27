
import React from "react";
import Logo from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[70%] fixed m-auto pt-10 flex justify-between items-center ">
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
