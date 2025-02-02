"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import NoteInput from './NoteInput'
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ALL_POSITION, COMPLETE_POSITION } from '@/app/store/slices/filterSlice';
import { deleteNote, setNotes, updateCompletion } from '@/app/store/slices/notesArraySlice';
import { NoteType } from '@/app/store/slices/notesArraySlice';
import initialNotesArray from '@/lib/notesArray';

const NotesList = () => {
    const notesArray = useSelector((state: RootState) => state.notesArray);
    const searchInput = useSelector((state: RootState) => state.search.value);
    const position = useSelector((state: RootState) => state.filter.position);
    const dispatch = useDispatch();

    const [displayedNotes, setDisplayedNotes] = React.useState<NoteType[]>(notesArray);

    // handle checkbox click
    const handleCheckbox = (id: string) => {
        dispatch(updateCompletion(id));
    };

    // filter notes based on position
    React.useEffect(() => {
        setDisplayedNotes(() => {
            if (position === ALL_POSITION) return notesArray;
            return notesArray.filter((note: NoteType) =>
                position === COMPLETE_POSITION ? note.isCompleted : !note.isCompleted
            );
        });
    }, [notesArray, position]);

    // filter notes based on search input
    React.useEffect(() => {
        setDisplayedNotes(() => {
            return notesArray.filter((note: NoteType) => note.content.toLowerCase().includes(searchInput.toLowerCase()));
        });
    }, [searchInput]);

    // load notes from localStorage
    React.useEffect(() => {
        const savedNotes = localStorage?.getItem('notes');
        const parsedNotes = savedNotes ? JSON.parse(savedNotes) : initialNotesArray;
        dispatch(setNotes(parsedNotes));
    }, []);

    // delete note
    const handleDelete = (id: string) => {
        dispatch(deleteNote(id));
        console.log(notesArray);
    }

    return (
        <div className="w-[520px] min-h-[520px] flex flex-col mt-[50px]">
            {displayedNotes.map((note: NoteType) => (
                <div key={note.id} className="w-full h-[26px] flex flex-row justify-between items-center border-b-[1px] border-primary pb-[32px] mb-[32px]">
                    <Checkbox
                        id={`${note.id}`}
                        className='w-[26px] h-[26px]'
                        onClick={() => handleCheckbox(note.id)}
                        checked={note.isCompleted ? true : false} />

                    <NoteInput content={note.content} id={note.id} className={`${note.isCompleted && 'text-muted-foreground line-through'}`} />

                    <Trash2
                        id={`${note.id}`}
                        className='text-muted-foreground hover:text-destructive transition-none'
                        onClick={() => handleDelete(note.id)} />
                </div>
            ))}
        </div>
    );
};

export default NotesList;


