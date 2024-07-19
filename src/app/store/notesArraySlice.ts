import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialNotesArray from '@/lib/notesArray';

export interface NoteType {
    id: number;
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
            state.push({ id: state.length + 1, content: action.payload, isCompleted: false });
        },
    },
});

export const { addNote, setNotes } = notesArraySlice.actions;

export default notesArraySlice.reducer;