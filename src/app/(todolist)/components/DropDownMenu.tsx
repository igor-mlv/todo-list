'use client'

import React from 'react'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropDownMenu() {
    const [position, setPosition] = React.useState("all")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-[85px] h-[38px] text-popover text-[18px] ">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 transition-none duration-0">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="complete">Complete</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="incomplete">Incomplete</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownMenu