'use client'
import { toggleTheme } from "@/app/store/themeSlice";
import { Button } from "@/components/ui/button"
import { Moon } from 'lucide-react';
import { useDispatch } from "react-redux";

function ThemeToggleButton() {
    const dispach = useDispatch();
    return (
        <Button
            className="w-[38px] h-[38px] px-0 py-0"
            onClick={() => dispach(toggleTheme())}>
            <Moon className="w-[22px] h-[22px] text-popover"
            />
        </Button>

    )
}

export default ThemeToggleButton