import React from "react";
import Logo from "./Logo";
import ThemeToggleButton from "../../Providers/ThemeToggleButton";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";

const Navbar = (props: any) => {
  console.log(props);
  return (
    <section className="flex justify-center">
      <div className="w-[90%] rounded-lg fixed m-auto px-10 py-5 flex justify-between items-center z-10 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-border ">
        <Logo />
        <NavMenu viewport={"desktop"} NavLinks={props.Links} />
        <div className="flex items-center ">
          {props.DarkMode && <ThemeToggleButton />}
          <div className="md:hidden">
            <Drawer NavLinks={props.Links} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
