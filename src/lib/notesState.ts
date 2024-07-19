import { RootState } from "@/app/store";
import { setNotes } from "@/app/store/notesArraySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const notesLocalStorage = useSelector((state: RootState) => state.notesArray);
const dispach = useDispatch();

React.useEffect(() => {
    const localStorageNotes = localStorage.getItem('notes');
    if (localStorageNotes) {
        const parsedNotes = JSON.parse(localStorageNotes);
        dispach(setNotes(parsedNotes));
        console.log("111", parsedNotes, notesLocalStorage);
    }
}, []);