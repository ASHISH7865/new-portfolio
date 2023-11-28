import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BsList } from "react-icons/bs";
import NavMenu from "./NavMenu";


const Drawer = () => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost">
        <BsList className="text-[25px]" />
      </Button>
    </SheetTrigger>
    <SheetContent className="flex justify-center items-center">
     <NavMenu viewport={"mobile"} />
    </SheetContent>
  </Sheet>
  )
}

export default Drawer