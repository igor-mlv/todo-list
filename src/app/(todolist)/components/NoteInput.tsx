import { Input } from '@/components/ui/input'
import React from 'react'

function NoteInput() {
    const [value, setValue] = React.useState('');

    const handleOnChange = (event: { target: { value: string; }; }) => {
        setValue(event.target.value);
    };

    React.useEffect(() => {
        const timeoutId = setTimeout(() => console.log(`I can see you're not typing. I can save note: "${value}" now!`), 1000);
        return () => clearTimeout(timeoutId);
    }, [value]);
    return (
        <Input
            className="text-[20px] w-[420px] h-[20px] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            placeholder="NOTE #1"
            onChange={handleOnChange} />
    )
}

export default NoteInput