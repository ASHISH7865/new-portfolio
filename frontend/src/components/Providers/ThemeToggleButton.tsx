"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";


  return (
    <Button variant="ghost" onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
    </Button>
  );
};

export default ThemeToggleButton;
