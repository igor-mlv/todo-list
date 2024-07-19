import { Input } from '@/components/ui/input'
import React from 'react'
import { cn } from "@/lib/utils"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setNotes } from '@/app/store/slices/notesArraySlice';

interface NoteInputProps {
    content: string;
    className: string;
    id: string;
}

function NoteInput({ content, className, id }: NoteInputProps) {
    const notesArray = useSelector((state: RootState) => state.notesArray);
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(content);

    const handleOnChange = (event: { target: { value: string; }; }) => {
        setValue(event.target.value);
    };

    React.useEffect(() => {
        dispatch(setNotes(notesArray.map((note) => note.id === id ? { ...note, content: value } : note)));
    }, [value]);
    return (
        <Input
            className={cn("text-[20px] w-[420px] h-[20px] border-none focus-visible:ring-0 focus-visible:ring-offset-0", className)}
            type="text"
            placeholder="Why am i empty ?"
            onChange={handleOnChange}
            value={value} />
    )
}

export default NoteInput