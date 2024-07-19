import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const ALL_POSITION = "all";
export const COMPLETE_POSITION = "complete";
export const INCOMPLETE_POSITION = "incomplete";

export type Position = typeof ALL_POSITION | typeof COMPLETE_POSITION | typeof INCOMPLETE_POSITION;

interface FilterState {
    position: Position;
}

const initialState: FilterState = {
    position: ALL_POSITION,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleFilter(state, action: PayloadAction<Position>) {
            state.position = action.payload;
        },
    },
});

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;