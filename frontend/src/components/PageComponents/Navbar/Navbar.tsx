import React from "react";
import Logo from "./Logo";
import ThemeToggleButton from "../../Providers/ThemeToggleButton";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";


const Navbar = (props: any) => {
  return (
    <header className="max-w-screen-xl mx-auto sticky top-5 z-30">
      <div className=" rounded-lg  m-auto px-10 py-5 flex justify-between items-center z-[30] backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-border ">
        <div className="flex gap-16">
        <Logo />

        <NavMenu viewport={"desktop"} NavLinks={props.NavLinks} />
        </div>
        <div className="flex items-center ">
          {props?.DarkMode && <ThemeToggleButton />}
          <div className="md:hidden">
            <Drawer NavLinks={props.NavLinks} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
