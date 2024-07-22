import searchSlice, { toggleSearch } from '@/app/store/slices/searchSlice';
import { Input } from '@/components/ui/input'
import React from 'react'
import { useDispatch } from 'react-redux';

function SearchInput() {
    const [value, setValue] = React.useState('');

    const handleOnChange = (event: { target: { value: string; }; }) => {
        setValue(event.target.value);
    };

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(toggleSearch(value));
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