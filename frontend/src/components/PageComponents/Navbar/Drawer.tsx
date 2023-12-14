import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BsList } from "react-icons/bs";
import NavMenu from "./NavMenu";


const Drawer = ({NavLinks}  :any) => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost">
        <BsList className="text-[25px]" />
      </Button>
    </SheetTrigger>
    <SheetContent className="flex justify-center items-center backdrop-filter backdrop-blur-2xl bg-transparent">
     <NavMenu NavLinks={NavLinks} viewport={"mobile"} />
    </SheetContent>
  </Sheet>
  )
}

export default Drawer