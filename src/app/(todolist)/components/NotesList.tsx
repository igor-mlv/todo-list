"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import NoteInput from './NoteInput'
import { Trash2 } from 'lucide-react';
import initialNotesArray from '@/lib/NotesArray';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ALL_POSITION, COMPLETE_POSITION } from '@/app/store/filterSlice';

interface NoteType {
    id: number;
    content: string;
    isCompleted: boolean;
};

const NotesList = () => {

    const notesLocalSorageRef = React.useRef(initialNotesArray);

    React.useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        const parsedNotes = savedNotes ? JSON.parse(savedNotes) : initialNotesArray;
        notesLocalSorageRef.current = parsedNotes;
    }, []);

    const [displayedNotes, setDisplayedNotes] = React.useState(notesLocalSorageRef.current);

    const handleCheckbox = (id: number) => {
        const updatedNotes = notesLocalSorageRef.current.map((note: NoteType) =>
            note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
        );
        notesLocalSorageRef.current = updatedNotes;
        setDisplayedNotes(updatedNotes);
    };

    const position = useSelector((state: RootState) => state.filter.position);
    React.useEffect(() => {
        console.log(displayedNotes);
        localStorage.setItem('notes', JSON.stringify(notesLocalSorageRef.current));
        setDisplayedNotes(() => {
            if (position === ALL_POSITION) return notesLocalSorageRef.current;
            return notesLocalSorageRef.current.filter((note: NoteType) =>
                position === COMPLETE_POSITION ? note.isCompleted : !note.isCompleted
            );
        });
    }, [notesLocalSorageRef.current, position]);

    return (
        <div className="w-[520px] min-h-[520px] flex flex-col mt-[50px]">
            {displayedNotes.map((note: NoteType) => (
                <div key={note.id} className="w-full h-[26px] flex flex-row justify-between items-center border-b-[1px] border-primary pb-[32px] mb-[32px]">
                    <Checkbox
                        id={`${note.id}`}
                        className='w-[26px] h-[26px]'
                        onClick={() => handleCheckbox(note.id)}
                        checked={note.isCompleted ? true : false} />

                    <NoteInput content={note.content} className={`${!note.isCompleted && 'text-muted-foreground line-through'}`} />

                    <Trash2 id={`${note.id}`} className='text-muted-foreground hover:text-destructive transition-none' />
                </div>
            ))}
        </div>
    );
};

export default NotesList;


