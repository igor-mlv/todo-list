import { Button } from "@/components/ui/button"
import { Moon } from 'lucide-react';

function ThemeToggleButton() {
    return (
        <Button className="w-[38px] h-[38px] px-0 py-0">
            <Moon className="w-[22px] h-[22px] text-popover" />
        </Button>
    )
}

export default ThemeToggleButton