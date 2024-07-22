import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface NoteType {
    id: string;
    content: string;
    isCompleted: boolean;
};

const initialState: NoteType[] = [];

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
        updateCompletion(state, action: PayloadAction<string>) {
            const updatedNotes =
                state.map((note: NoteType) =>
                    note.id === action.payload
                        ? { ...note, isCompleted: !note.isCompleted }
                        : note
                );
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        },
        deleteNote(state, action: PayloadAction<string>) {
            const updatedNotes = state.filter(note => note.id !== action.payload);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        },

    },
});

export const { addNote, setNotes, updateCompletion, deleteNote } = notesArraySlice.actions;

export default notesArraySlice.reducer;