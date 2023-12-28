"use client"

import * as React from "react"
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { string } from "yup"





export function DataDropdown({name ,Data, handleSetData}: any) {
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Tech</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
            Data?.map((item:any) => {
                return (
                    <DropdownMenuCheckboxItem
                        key={item.id}
                        checked={item.checked}
                        onCheckedChange={(checked : boolean) => handleSetData(checked, item.id, item.name)}
                    >
                        {item.name}
                    </DropdownMenuCheckboxItem>
                )
            })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
