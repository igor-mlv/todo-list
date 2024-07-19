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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleFilter } from '@/app/store/slices/filterSlice';
import { Position as PositionType, ALL_POSITION, COMPLETE_POSITION, INCOMPLETE_POSITION } from '@/app/store/slices/filterSlice';

function DropDownMenu() {
    const position = useSelector((state: RootState) => state.filter.position);
    const dispach = useDispatch();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-[85px] h-[38px] text-popover text-[18px] ">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 transition-none duration-0">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={(value) => dispach(toggleFilter(value as PositionType))}
                >
                    <DropdownMenuRadioItem value={ALL_POSITION}>All</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={COMPLETE_POSITION}>Complete</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={INCOMPLETE_POSITION}>Incomplete</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDownMenu