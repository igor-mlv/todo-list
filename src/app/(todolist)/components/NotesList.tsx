"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import NoteInput from './NoteInput'
import { Trash2 } from 'lucide-react';
import initialNotesArray from '@/lib/NotesArray';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ALL_POSITION, COMPLETE_POSITION, INCOMPLETE_POSITION } from '@/app/store/filterSlice';

function NotesList() {

    const [notesArray, setNotesArray] = React.useState(initialNotesArray);
    const handleCheckbox = (id: number) => {
        const updatedNotes = notesArray.map(note => {
            if (note.id === id) {
                return { ...note, isCompleted: !note.isCompleted };
            }
            return note;
        });
        setNotesArray(updatedNotes);
    };

    const position = useSelector((state: RootState) => state.filter.position);
    React.useEffect(() => {
        if (position === COMPLETE_POSITION) {
            const updatedNotes = notesArray.filter(note => {
                return !note.isCompleted;
            });
            setNotesArray(updatedNotes);
        } else if (position === INCOMPLETE_POSITION) {
            const updatedNotes = notesArray.filter(note => {
                return note.isCompleted;
            });
            setNotesArray(updatedNotes);
        }
    }, [position]);

    return (
        <div className="w-[520px] min-h-[520px] flex flex-col mt-[50px]">
            {notesArray.map((note: { id: number, content: string, isCompleted: boolean }) => (
                <div key={note.id} className="w-full h-[26px] flex flex-row justify-between items-center border-b-[1px] border-primary pb-[32px] mb-[32px]">
                    <Checkbox
                        id={`${note.id}`}
                        className='w-[26px] h-[26px]'
                        onClick={() => handleCheckbox(note.id)}
                        checked={note.isCompleted ? false : true} />

                    <NoteInput content={note.content} className={`${!note.isCompleted && 'text-muted-foreground line-through'}`} />

                    <Trash2 id={`${note.id}`} className='text-muted-foreground hover:text-destructive transition-none' />
                </div>
            ))}
        </div>
    )
}

export default NotesList;


