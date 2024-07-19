import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialNotesArray from '@/lib/notesArray';
import { v4 as uuidv4 } from 'uuid';

export interface NoteType {
    id: string;
    content: string;
    isCompleted: boolean;
};

// this is cause error 
const savedNotes = localStorage.getItem('notes');
const parsedNotes = savedNotes ? JSON.parse(savedNotes) : initialNotesArray;

const initialState: NoteType[] = parsedNotes;

const notesArraySlice = createSlice({
    name: 'notesArray',
    initialState,
    reducers: {
        setNotes(state, action: PayloadAction<NoteType[]>) {
            localStorage.setItem('notes', JSON.stringify(action.payload));
            return action.payload;
        },
        addNote(state, action: PayloadAction<string>) {
            const uniqueId = uuidv4();
            state.push({ id: uniqueId, content: action.payload, isCompleted: false });
        },
    },
});

export const { addNote, setNotes } = notesArraySlice.actions;

export default notesArraySlice.reducer;