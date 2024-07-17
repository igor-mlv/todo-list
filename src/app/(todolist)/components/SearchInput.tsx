import { Input } from '@/components/ui/input'
import React from 'react'

function SearchInput() {
    const [value, setValue] = React.useState('');

    const handleOnChange = (event: { target: { value: string; }; }) => {
        setValue(event.target.value);
    };

    React.useEffect(() => {
        const timeoutId = setTimeout(() => console.log(`I can see you're not typing. I can search note: "${value}" now!`), 1000);
        return () => clearTimeout(timeoutId);
    }, [value]);
    return (
        <Input
            className="text-[16px] w-[595px] h-[38px] pl-2 pr-2"
            type="text"
            placeholder="Search note ..."
            onChange={handleOnChange} />
    )
}

export default SearchInput