'use client'
import { RootState } from "@/app/store";
import { toggleTheme } from "@/app/store/slices/themeSlice";
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";

function ThemeToggleButton() {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const dispach = useDispatch();
    return (
        <Button
            className="w-[38px] h-[38px] px-0 py-0"
            onClick={() => dispach(toggleTheme())}>
            {isDarkMode ?
                <Sun className="w-[22px] h-[22px] text-popover" />
                :
                <Moon className="w-[22px] h-[22px] text-popover" />}


        </Button>

    )
}

export default ThemeToggleButton